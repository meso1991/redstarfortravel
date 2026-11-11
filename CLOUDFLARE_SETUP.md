# Cloudflare Pages setup

The site can be deployed from the existing GitHub repository `meso1991/redstarfortravel`.

## Create the Pages project

1. Open **Workers & Pages** in Cloudflare.
2. Select **Create application** and then **Pages**.
3. Choose **Connect to Git** and authorize GitHub.
4. Select `meso1991/redstarfortravel` and the `main` branch.
5. Use these build settings:

   - Framework preset: `None`
   - Build command: leave empty
   - Build output directory: `.`

6. Deploy the project.

The existing `functions/` directory is deployed automatically as Pages Functions.

## Add the storage bindings

In the Pages project, open **Settings > Functions > Bindings** and add:

```text
VISA_DOCUMENTS = R2 bucket redstar-visa-documents
DB = D1 database redstar-db
```

Redeploy after adding or changing bindings.

## Add the custom domain

Open **Custom domains**, add `redstar-travel.com`, and follow Cloudflare's DNS instructions.
After Pages verifies the domain, remove the old GitHub Pages DNS records only when Cloudflare shows the new domain as active.

## Verify the deployment

Open:

```text
https://redstar-travel.com/api/health
https://redstar-travel.com/visa/visa.html
```

The health response should include `"cloudflare": true` and `"storageConfigured": true` after the R2 and D1 bindings are active.

## Duffel flight and Nuitee hotel search

The official site currently uses static GitHub Pages hosting in front of Cloudflare, so Pages Functions are not active. A standalone Worker handles Duffel flight searches and Nuitee Connect hotel searches:

1. Deploy `workers/duffel-search.js` as `redstar-duffel-search` on Cloudflare Workers.
2. In Worker **Settings > Variables and Secrets**, add `DUFFEL_API_TOKEN` and `NUITEE_API_KEY` as **secret** variables. Never put either key in source code or a regular variable.
3. Keep the Worker `workers.dev` URL enabled. The results pages call it directly, and the Worker only allows the official site's origins.

The supplied `duffel_test_` credential and Nuitee sandbox key are for test-mode searches only. The results pages label these results as test data; this does not enable real bookings.

The public endpoints are `GET /api/flights/search` and `GET /api/hotels/search`. The Worker keeps both provider keys server-side; hotel search is sent to Nuitee Connect's `POST /v3.0/hotels/rates` endpoint.