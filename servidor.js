const http = require('http');
const fs = require('fs');
const path = require('path');



function resolverApiDiretorio() {
    const functionDirectory = './api'; // Diretório com as funções (ajuste o caminho conforme necessário)
    const apiDirectory = './api'; // Diretório onde será salvo o arquivo "apis.js" (ajuste o caminho conforme necessário)
  
    function generateAPIsObject() {
      const apis = {};
  
      // Lê os arquivos presentes no diretório das funções
      const files = fs.readdirSync(functionDirectory);
      const jsFiles = files.filter(file => file.endsWith('.js'));
      jsFiles.forEach(file => {
        const functionName = path.parse(file).name;
        // Ignora o arquivo se o nome for 'index'
        if (functionName !== 'index') {
          apis[functionName] = file;
        }
      });
  
      return apis;
    }
  
    const apisObject = generateAPIsObject();
  
    let declarations = '';
    Object.keys(apisObject).forEach(functionName => {
      const filePath = path.join(apisObject[functionName]);
      const declaration = `const ${functionName} = require('./api/${functionName}');\n`;
      declarations += declaration;
    });
  
    const fileContent = `
  function fileContentApi() {
  ${declarations}
    return module.exports = {
  ${Object.entries(apisObject)
      .map(([key, value], index, array) => {
        if (index === array.length - 1) {
          return `    ${key}`;
        } else {
          return `    ${key},`;
        }
      })
      .join('\n')}
    };
  }
  
  fileContentApi();`;
  
    return fileContent;
  }
 const pathApi = resolverApiDiretorio();
 const apiObject = eval(pathApi);

 
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  } else if (req.url.startsWith('/api/')) {
    const apiPath = path.join(__dirname, 'api');   
    const endpoint = req.url.substring(5).split('/')[0]
    const filePath = path.join(apiPath, endpoint);
    apiObject[endpoint](req, res)
   
  } else {
    let filePath = '.' + req.url;
    if (filePath === './') {
      filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = getContentType(extname);

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404);
          res.end('Recurso não encontrado');
        } else {
          res.writeHead(500);
          res.end('Erro interno do servidor');
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});

function getContentType(extname) {
    switch (extname) {
        case '.js':
          return 'text/javascript';
        case '.css':
          return 'text/css';
        case '.json':
          return 'application/json';
        case '.png':
          return 'image/png';   
          case '.jpg':
            return 'image/jpeg';
          case '.gif':
            return 'image/gif';
          default:
            return 'text/plain';
        }
}
