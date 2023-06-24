const fs = require('fs');
const path = require('path');
const { server, router} = require('./server.js');


const functionDirectory = './api'; // Diretório com as funções (ajuste o caminho conforme necessário)
const apiDirectory = './api'; // Diretório onde será salvo o arquivo "apis.js" (ajuste o caminho conforme necessário)

function generateAPIsObject() {
  const apis = {};

  // Lê os arquivos presentes no diretório das funções
  const files = fs.readdirSync(functionDirectory);
  const jsFiles = files.filter(file => file.endsWith('.js'));
  jsFiles.forEach(file => {
   const functionName = path.parse(file).name;  
   apis[functionName] = file;
  });

  return apis;  
}
const apisObject = generateAPIsObject();

const fileContent = `export default ${JSON.stringify(apisObject, null, 2)}`;
const indexFilePath = path.join(apiDirectory, 'index.js');

if (fs.existsSync(indexFilePath)) {
  const existingContent = fs.readFileSync(indexFilePath, 'utf-8');
  if (existingContent === fileContent) {
    console.log('No changes detected. Skipping file update.');
    return;
  }
}

fs.writeFileSync(indexFilePath, fileContent);
console.log('File "index.js" updated successfully in the "api" directory.');


router.get('/router/:id', async (req, res) => {

  const id = req.params.id;
  const apiEndpoint = req.url.replace('/router', '');
  const filePath = path.join(apiDirectory, apiEndpoint + '.js');

  console.log(filePath);
  user(req, res);
  
});





router.get('/',  async (req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    const content = await fs.promises.readFile(filePath, 'utf-8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content, 'utf-8');

});

router.get('/api', async (req, res) => {
  const filePath = path.join(__dirname, 'db', 'db.json');

  try {
    const content = await fs.promises.readFile(filePath, 'utf-8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(content, 'utf-8');
  } catch (err) {
    res.statusCode = 500;
    res.end('Erro ao ler o arquivo JSON.');
  }
});

router.post('/api', (req, res) => {
  const { name, email, phone } = req.body

  const filePath = path.join(__dirname, 'db', 'db.json');

  fs.readFile(filePath, (err, content) => {
    const dbContent = JSON.parse(content || '[]');
    const id = Math.random().toString(32).substr(2, 9)
    dbContent.push({ id, name, email, phone });
    fs.writeFile(filePath, JSON.stringify(dbContent), (err) => {
      res.statusCode = err ? 500 : 200;
      res.end(err ? 'Erro ao escrever no arquivo.' : 'Dados adicionados ao arquivo.');
    });
  });
});

router.put('/api/:id', (req, res) => {
  const id = req.params.id;
  const dados = req.body;
  
  const filePath = path.join(__dirname, 'db', 'db.json');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 500;
      res.end('Erro ao ler o arquivo.');
      return;
    }

    const dbContent = JSON.parse(content || '[]');
    const existingDataIndex = dbContent.findIndex(item => item.id === id);

    if (existingDataIndex === -1) {
      res.statusCode = 404;
      res.end('Objeto não encontrado.');
      return;
    }

    const updatedData = { id, ...dados };
    dbContent[existingDataIndex] = updatedData;

    fs.writeFile(filePath, JSON.stringify(dbContent), (err) => {
      if (err) {
        res.statusCode = 500;
        res.end('Erro ao escrever no arquivo.');
        return;
      }
      
      res.statusCode = 200;
      res.end('Objeto atualizado no arquivo.');
    });
  });
});

router.delete('/api/:id', (req, res) => {
  const id = req.params.id;
  const filePath = path.join(__dirname, 'db', 'db.json');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 500;
      return res.end('Erro ao ler o arquivo.');
    }

    const dbContent = JSON.parse(content || '[]');
    const updatedData = dbContent.filter(item => item.id !== id);

    fs.writeFile(filePath, JSON.stringify(updatedData), (err) => {
      if (err) {
        res.statusCode = 500;
        return res.end('Erro ao escrever no arquivo.');
      }
      
      res.statusCode = 200;
      res.end('Objeto excluído do arquivo.');
    });
  });
});


const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


