import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import router from './routes';

dotenv.config();
const PORT = process.env.PORT || 3006;

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

// ---Routes---
app.use(router);

// ---Error 404---
app.use((_req, res) => {
  res.send('Página não encontrada')
});

app.listen(PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
} );
