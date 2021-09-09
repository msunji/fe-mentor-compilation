const { table } = require("./airtable");
const formatRes = require("./formatRes");

module.exports = async (event) => {
  try {
    const solutions = await table.select().firstPage(); // get first 20 records
    return formatRes(200, solutions);
  } catch (error) {
    console.log(error);
    return formatRes(500, {});
  }
};
