import express from 'express';
import path from 'path';

const app = express();
const PORT = 8095;

app.use(express.json());

app.get('/', (req, res) => {
  // res.send('Servidor com TypeScript funcionando!');
  
  const filePath = path.join(__dirname, 'main-screen','main-screen.html');
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
