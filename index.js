const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

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



const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (url === '/') {
    // Rota raiz
    const filePath = path.join(__dirname, 'index.html');
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
  } else if (url.startsWith('/api/')) {
    const apiEndpoint = url.substring(5);
    console.log(apiObject[apiEndpoint](req, res))
   
  } else {
    // Rota para arquivos estáticos
    const filePath = path.join(__dirname, url);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.statusCode = 404;
        res.end('Not found');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', getMimeType(filePath));
        res.end(content);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
