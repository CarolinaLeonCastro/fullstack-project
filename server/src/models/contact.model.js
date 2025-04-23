import mongoose from 'mongoose';

const contactsSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, require: true },
  email: { type: String, unique: true, required: true },
  address: { type: [Object], required: true },
});

// hook
contactsSchema.pre('save', function(next) {
  // do stuff
  next();
});

export default mongoose.model('Contacts', contactsSchema);
