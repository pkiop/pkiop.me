import express from 'express';
import dotenv from 'dotenv';
import useDevServer from './devServer';
import path from 'path';
import cors from 'cors';

import api from './router/api';
dotenv.config();
const app = express();
const {
  PORT = 3000,
} = process.env;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname ,'../public'));
app.engine('html', require('ejs').renderFile);
app.use('/api', cors(), api);

if(process.env.NODE_ENV === 'development') {
  useDevServer(app);
} else {
  app.use(express.static('public'));
}

app.get('/', (req, res) => res.render(path.resolve(__dirname, '../public/index.html')));
app.use('/', (req, res) => res.send('now, 404 error'));

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});