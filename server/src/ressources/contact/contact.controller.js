import { contacts } from "./contact.database.js";
export function getContacts(req, res) {
  res.send(contacts);
}

export function getContactsById(req, res) {
  res.send(contacts + req.params.id);
}

export function createContact(req, res) {
  res.send(contacts);
}
export function updateContact(req, res) {
  res.send(contacts + req.params.id);
}   
export function deleteContact(req, res) {
  res.send(contacts + req.params.id);
}
