
const path = require('path');
const fs = require('fs');
module.exports =  async function (req, res) {
  const filePath = path.join(__dirname, "..", "src", 'index.html');
  console.log(filePath)
  const content = await fs.promises.readFile(filePath, 'utf-8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(content, 'utf-8');
};
