require("dotenv").config();
const { execSync } = require("child_process");

const direction = process.argv[2]; // push | pull
const only = process.argv[3]; // content | files (optional)

const url = process.env.STRAPI_CLOUD_URL;
const token = process.env.STRAPI_TRANSFER_TOKEN;

if (!url || !token) {
  console.error("Missing STRAPI_CLOUD_URL or STRAPI_TRANSFER_TOKEN in .env");
  process.exit(1);
}

let cmd;
if (direction === "push") {
  cmd = `strapi transfer --to ${url} --to-token ${token}`;
} else if (direction === "pull") {
  cmd = `strapi transfer --from ${url} --from-token ${token}`;
} else {
  console.error("Usage: node scripts/transfer.js <push|pull> [content|files]");
  process.exit(1);
}

if (only) {
  cmd += ` --only ${only}`;
}

execSync(cmd, { stdio: "inherit" });
