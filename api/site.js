const fs = require('fs');
const path = require('path');

module.exports  = async (req, res) => {
  const parentDirectoryPath = path.resolve(__dirname, '..', 'db', 'db.json');
  try {
    const content = await fs.promises.readFile(parentDirectoryPath, 'utf-8');
    console.log(content);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(content, 'utf-8');
  } catch (err) {
    res.statusCode = 500;
    res.end('Erro ao ler o arquivo JSON.');
  }
}



  
