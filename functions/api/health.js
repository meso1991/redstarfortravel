export function onRequestGet({ env }) {
    return Response.json({
        ok: true,
        cloudflare: true,
        storageConfigured: Boolean(env.VISA_DOCUMENTS && env.DB)
    });
}