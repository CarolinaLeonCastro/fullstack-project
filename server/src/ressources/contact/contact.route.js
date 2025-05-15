import { Router } from 'express';
import { createContact, getContacts, getContactById, updateContact, deleteContact } from './contact.controller.js';
import upload from '../../config/multer.config.js';
import { authenticate } from '../../auth/auth.middleware.js';

const router = Router();

router
  .route('/')
    .post(
      authenticate,
      upload.single('avatar'),
      createContact
    )
    .get(getContacts);

router
  .route('/:id')
    .get(getContactById)
    .put(
      authenticate,
      upload.single('avatar'),
      updateContact
    )
    .delete(
      authenticate,
      deleteContact
    );

export { router as contactRouter };
