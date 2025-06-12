import { Contact } from './contact.model.js';

export const createContact = async (req, res, next) => {
  try {
    const file = req.file;
    const { name, email, phone } = req.body;
    const contact = await Contact.create({ name, email, phone, avatar: file.filename, owner: req.user.id });
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const contacts = await Contact.find({
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ],
      $and: [
        { owner: req.user.id }
      ]
    })
    .skip((page - 1) * limit)
    .limit(limit);

    const total = search ? contacts.length : await Contact.countDocuments();
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({ contacts, total, totalPages });
  } catch (error) {
    next(error);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findOne({
      _id: id,
      owner: req.user.id,
    });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const filename = req.file?.filename || undefined;
    const { name, email, phone } = req.body;

    const contact = await Contact.findOneAndUpdate(
      { _id: id, owner: req.user.id },
      { name, email, phone, avatar: filename },
      { new: true }
    );

    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    await Contact.findOneAndUpdate(
      { _id: id, owner: req.user.id },
      { deletedAt: new Date() }
    );

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
