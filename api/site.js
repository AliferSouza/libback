const path = require('path');
const fs = require('fs');

module.exports  = async (req, res) => {
  const filePath = path.join(__dirname, '..', 'index.html');

  const content = await fs.promises.readFile(filePath, 'utf-8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(content, 'utf-8');
  
  }
  