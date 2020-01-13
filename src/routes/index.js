import { Router } from 'express';
import { addAsync } from '@awaitjs/express';

const router = addAsync(Router());

router.useAsync('/', (req, res, next) => {
    throw new Error("Hello World!!!");
});

export default router;

