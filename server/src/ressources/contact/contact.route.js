
import express from 'express';
import { protect } from '../../api/auth/auth.middleware.js';   // <-- chemin corrigé


import upload         from '../../config/multer.js';           // ou multer.config.js
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} from './contact.controller.js';

const contactRouter = express.Router();

contactRouter.use(protect);

contactRouter
  .route('/')
  .get(getAllContacts)
  .post(upload.single('avatar'), createContact);

contactRouter
  .route('/:id')
  .get(getContactById)
  .patch(upload.single('avatar'), updateContact)
  .delete(deleteContact);

export { contactRouter };
