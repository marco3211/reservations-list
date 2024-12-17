const fs = require("fs").promises;

// Function to read a JSON file asynchronously
async function readJSONFile(filename) {
  const data = await fs.readFile(filename, "utf8");
  return JSON.parse(data);
}

module.exports = { readJSONFile };
