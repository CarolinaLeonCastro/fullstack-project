import  contacts  from "../data/contacts.database.js";

// Obtener todos los estudiantes
export const getContacts = (req, res) => res.json(contacts());

// Obtener un estudiante por ID
export const getContactsById = (req, res) => {
  const { id } = req.params;

  res.json({ msg: `obtenir un contact avec son ${id}` });
  res.send(contacts + req.params.id);
};

// Crear un nuevo estudiante
export const createContact = (req, res) => {
  res.json({ msg: 'creer un contact' });
};

// Actualizar un estudiante
export const updateContact = (req, res) => {
  const { id } = req.params;

  res.json({ msg: 'mise à jour contact' });
};

// Eliminar un estudiante
export const deleteContact = (req, res) => {
  const { id } = req.params;

  res.json({ msg: 'contact supprimé' });
};
