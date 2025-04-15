import express from "express";
import { getContacts, getContactsById, createContact,updateContact,deleteContact} from "./contact.controller.js";
const router = express.Router();


router.get("/", function (req, res) {
  res.send("Hello");
});


router.get("/api/contacts", getContacts);

router.get("/api/contacts/:id",  getContactsById);


router.post("/api/contacts", createContact );
router.put("/api/contacts/:id",updateContact);
router.delete("/api/contacts/:id", deleteContact);

export default router;  
