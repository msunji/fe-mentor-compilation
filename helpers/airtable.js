require("dotenv").config();
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.BASE_ID
);

const table = base(process.env.TAB_NAME);

module.exports = { table };
