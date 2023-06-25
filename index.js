const fs = require('fs');
const path = require('path');
const { server, router} = require('./server.js');


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

router.get('/',  async (req, res) => {
    const filePath = path.join(__dirname, "public", 'index.html');
    const content = await fs.promises.readFile(filePath, 'utf-8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content, 'utf-8');

});


router.all('/api/:id', async (req, res) => {
  const apiDirectory = path.join(__dirname, 'api');
  const id = req.params.id;
  const apiEndpoint = req.url.replace('/router', '');
  const filePath = path.join(apiDirectory, apiEndpoint + '.js');
  apiObject[id](req, res)

  
});




const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});



