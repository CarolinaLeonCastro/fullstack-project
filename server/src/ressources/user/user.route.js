import express from 'express';
import { findAll, findOne, update, remove } from './user.controller.js';
import { authenticate, hasRole } from '../../auth/auth.middleware.js';

const router = express.Router();

router.route('/')
  .get(authenticate, hasRole(['admin']), findAll);

router.route('/:id')
  .get(authenticate, findOne)
  .put(authenticate, update)
  .delete(authenticate, remove);

export { router as userRouter }; 