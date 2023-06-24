const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

// Função para resolver o diretório das APIs
function resolverApiDiretorio() {
  const functionDirectory = './api'; // Diretório com as funções (ajuste o caminho conforme necessário)

  const apiObject = {};

  // Lê os arquivos presentes no diretório das funções
  const files = fs.readdirSync(functionDirectory);
  const jsFiles = files.filter(file => file.endsWith('.js'));

  jsFiles.forEach(file => {
    const functionName = path.parse(file).name;
    // Ignora o arquivo se o nome for 'index'
    if (functionName !== 'index') {
      const apiFunction = require(path.join(functionDirectory, file));
      apiObject[functionName] = apiFunction;
    }
  });

  return apiObject;
}

const apiObject = resolverApiDiretorio();

// Criação do servidor
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Rota para as APIs
  if (url.startsWith('/api/')) {
    const id = url.substring(5);
    if (apiObject.hasOwnProperty(id)) {
      const apiFunction = apiObject[id];
      apiFunction(req, res);
    } else {
      res.statusCode = 404;
      res.end('API endpoint not found');
    }
  } else if (url === '/') {
    // Rota padrão (index.html)
    const filePath = path.join(__dirname, 'public', 'index.html');
    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
      }
    });
  } else {
    // Rota inválida
    res.statusCode = 404;
    res.end('Not found');
  }
});

// Inicia o servidor
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
