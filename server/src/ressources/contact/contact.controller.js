const { contacts } = require("./contact.database.js");

// Obtener todos los estudiantes
const getContacts = (req, res) =>  res.json(contacts())

// Obtener un estudiante por ID
const getContactsById = (req, res) => {
 const { id }= req.params;

  res.json({ msg: `obtenir un contact avec son ${id}` });
  res.send(contacts + req.params.id);
};

// Crear un nuevo estudiante
const createContact = (req, res) => {

  res.json({ msg: 'creer un contact' });
};

// Actualizar un estudiante
const updateContact = (req, res) => {
  const { id } = req.params;

  res.json({ msg: 'mise à jour contact' });
};

// Eliminar un estudiante
const deleteContact = (req, res) => {
  const { id } = req.params;

  res.json({ msg: 'contact supprimé' });
};

module.exports = {
  getContacts,
  getContactsById,
  createContact,
  updateContact,
  deleteContact
};
