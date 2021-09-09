const formatRes = require("../helpers/formatRes");
const getSolutions = require("../helpers/getSolutions");

exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await getSolutions(event);
  } else {
    return formatRes(405, {});
  }
};
