const fs = require('fs');
const path = require('path');
const { server, router, loadEnvVariables} = require('./server.js');
loadEnvVariables("alifer.env")



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


