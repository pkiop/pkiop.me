import * as express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import useDevServer from './devServer';
dotenv.config();
console.log("process env : ", process.env);
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