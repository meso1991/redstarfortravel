const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "application/pdf"]);

function json(payload, status = 200) {
    return new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json; charset=utf-8" }
    });
}

function text(value, maxLength = 500) {
    return String(value || "").trim().slice(0, maxLength);
}

export async function onRequestPost({ request, env }) {
    const form = await request.formData();
    const passport = form.get("passport");
    const fields = {
        name: text(form.get("name"), 100),
        phone: text(form.get("phone"), 30),
        address: text(form.get("address"), 180),
        destination: text(form.get("destination"), 80),
        nationality: text(form.get("nationality"), 80),
        service: text(form.get("service"), 100),
        birthYear: text(form.get("birthYear"), 4),
        notes: text(form.get("notes"), 500),
        language: text(form.get("language"), 2)
    };

    if (Object.values(fields).slice(0, 6).some((value) => !value)) {
        return json({ error: "Name, phone, address, destination, nationality, and service are required." }, 400);
    }

    if (!(passport instanceof File) || !passport.size) {
        return json({ error: "A passport image is required." }, 400);
    }

    if (passport.size > MAX_FILE_SIZE || !ALLOWED_TYPES.has(passport.type)) {
        return json({ error: "The passport file must be a JPEG, PNG, or PDF up to 10 MB." }, 400);
    }

    if (fields.destination === "saudi" && fields.service === "family_visit_khartoum" && !/^(19|20)\d{2}$/.test(fields.birthYear)) {
        return json({ error: "A valid birth year is required for this Saudi family visit route." }, 400);
    }

    const orderId = `RS-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
    const fileKey = `visa-orders/${orderId}/passport`;
    const createdAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString();

    try {
        await env.VISA_DOCUMENTS.put(fileKey, passport.stream(), {
            httpMetadata: { contentType: passport.type }
        });

        await env.DB.prepare(`
            INSERT INTO visa_orders (
                order_id, created_at, expires_at, name, phone, address,
                destination, nationality, service, birth_year, notes,
                language, passport_key
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
            orderId,
            createdAt,
            expiresAt,
            fields.name,
            fields.phone,
            fields.address,
            fields.destination,
            fields.nationality,
            fields.service,
            fields.birthYear || null,
            fields.notes,
            fields.language,
            fileKey
        ).run();
    } catch (error) {
        await env.VISA_DOCUMENTS.delete(fileKey);
        return json({ error: "Could not save the visa application." }, 500);
    }

    return json({ orderId }, 201);
}