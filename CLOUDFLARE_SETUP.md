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