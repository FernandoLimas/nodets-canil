import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

// ---Routes---

app.listen(process.env.PORT || 3006, () => {
  console.log(`Listening on port ${process.env.PORT}`);
} );
