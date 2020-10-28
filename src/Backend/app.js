import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import useDevServer from './devServer';
dotenv.config();
const app = express();
const {
  PORT = 3000,
} = process.env;

if(process.env.NODE_ENV === 'development') useDevServer(app);
else app.use(express.static(path.resolve(__dirname, './public')));
app.use('/', (req, res) => res.redirect('/'));

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});