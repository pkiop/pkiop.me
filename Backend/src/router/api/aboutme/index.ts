import { RuleTester } from 'eslint';
import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx: Koa.Context) => {
  ctx.body = 'result';
});

export default router;
