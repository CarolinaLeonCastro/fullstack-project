import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    nickname: String,
    password: String
});

const User = model('User', userSchema, 'users');

export { User };