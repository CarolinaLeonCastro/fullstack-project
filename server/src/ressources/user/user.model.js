import mongoose from 'mongoose';

export const USER_ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  USER: 'user'};



const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long']
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLES),
    default: null
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true }); // createdAt and updatedAt

userSchema.index({ deletedAt: 1 });

userSchema.pre('find', function() {
  this.where({ deletedAt: null });
});

userSchema.pre('findOne', function() {
  this.where({ deletedAt: null });
});

export const User = mongoose.model('User', userSchema);
