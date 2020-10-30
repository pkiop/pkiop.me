import express from 'express';
import dotenv from 'dotenv';
import useDevServer from './devServer';
dotenv.config();
const app = express();
const {
  PORT = 3000,
} = process.env;

useDevServer(app);
app.get('/', (req, res) => res.redirect('/'));

app.use('/', (req, res) => res.send('404 error'));

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});