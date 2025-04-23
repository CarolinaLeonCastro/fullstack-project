import mongoose from 'mongoose';
import  SECTORS  from '../enums/sector.enum.js';

const { Schema, model } = mongoose;

const clientSchema = new Schema({
    firstname: {
        type: String,
        required: 'Firstname is required'
    },
    lastname: {
        type: String,
        required: 'Lastname is required'
    },
    birthdate: {
        type: Date,
        required: 'Birthdate is required'
    },
    company: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: 'Email is required'
    },
    address: {
        type: [Object],
        required: 'One address is required'
    },
    vat: {
        type: String,
        unique: true,
        required: function () {
            return this.company !== undefined;
        }
    },
    client_number: {
        type: Number,
        unique: true,
        required: 'Client number is required'
    },
    registration_date: {
        type: Date,
        default: Date.now
    },
    sectors: {
        type: [String],
        enum: SECTORS,
        required: function () {
            return this.company !== undefined;
        }
    },
    revenues: {
        type: Number,
        min: [100, 'The house does not lend!'],
        max: [100000000, 'Welcome to the house, Mister!'],
        required: function () {
            return this.company !== undefined;
        }
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: 'Linked user is required'
    }
}, { timestamps: true });

// Instance method
clientSchema.methods.getAge = function () {
    const age = new Date().getFullYear() - this.birthdate.getFullYear();
    return age;
};

clientSchema.methods.getColleagues = function (cb) {
    return this.model('Client').find({ company: this.company, _id: { $ne: this._id } }, cb);
};

// Static method
clientSchema.statics.findByCompany = function (company, cb) {
    return this.find({ company: company }, cb);
};

// Hook
clientSchema.pre('save', function (next) {
    this.client_number = Math.floor(Math.random() * 1000000);
    next();
});

// Export model
const Client = model('Client', clientSchema);
export { Client };
