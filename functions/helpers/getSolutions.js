const { table } = require("./airtable");
const formatRes = require("./formatRes");

module.exports = async (event) => {
  try {
    const data = await table.select().firstPage(); // get first 20 records
    const solns = data.map((solution) => ({
      id: solution.id,
      ...solution.fields,
    }));
    return formatRes(200, solns);
  } catch (error) {
    console.log(error);
    return formatRes(500, { msg: "Oops. Something went wrong." });
  }
};
