import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


 
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'public',  'index.html');
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
    if (fs.existsSync(filePath + '.js')) {
      const apiFunction = require(filePath);
      apiFunction(req, res);
    } else {
      res.statusCode = 404;
      res.end('Endpoint não encontrado');
    }
   
  } else {
    let filePath = path.join(__dirname, 'public', req.url);
    if (filePath === path.join(__dirname, 'public', '/')) {
      filePath = path.join(__dirname, 'public', 'index.html');
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
