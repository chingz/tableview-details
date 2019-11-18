import express, { Router } from 'express';

import getList from '@server/routes/cars/getList';
import getById from '@server/routes/cars/getById';

const router: Router = express.Router();

router.get('/list', getList);
router.get('/:id', getById);

export default router;
