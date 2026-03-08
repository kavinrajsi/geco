const strapi = require("@strapi/strapi");

async function run() {
  const app = await strapi.createStrapi({ appDir: process.cwd() }).load();
  const products = await app.documents("api::product.product").findMany({});
  for (const p of products) {
    await app.documents("api::product.product").delete({ documentId: p.documentId });
    console.log(`Deleted product: ${p.name}`);
  }
  console.log("Done.");
  process.exit(0);
}

run().catch((err) => { console.error(err); process.exit(1); });
