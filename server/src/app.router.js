import express from 'express';
import {getContacts,
        getContactsById,
        createContact,
        updateContact,
        deleteContact
} from './controllers/contact.controller.js';

const router = express.Router();

router
  .route('/')
  .get(getContacts)
  .post(createContact);

router
  .route('/:id')
  .get(getContactsById)
  .put(updateContact)
  .delete(deleteContact);

export default router;
