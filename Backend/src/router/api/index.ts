import Router from 'koa-router';
import aboutmeRouter from 'router/api/aboutme';

const router = new Router();
router.use('/aboutme', aboutmeRouter.routes());

export default router;
