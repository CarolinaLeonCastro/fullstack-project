

// src/resources/contact/contact.router.js
const express = require('express');
const router = express.Router();
const contactController = require('./contact.controller.js');

router
  .route('/')
  .get(contactController.getContacts)
  .post(contactController.createContact);

router
  .route('/:id')
  .get(contactController.getContactsById)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;



