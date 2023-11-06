import database from "../../../../infra/database.js";

console.log(database);

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows);
  response.status(200).json({});
}

export default status;
