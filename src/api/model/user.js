/*
 * --------------------------------------
 * Copyright (c) 2019 Seedalara
 * --------------------------------------
 */

import mongoose from 'mongoose';
import crypto from 'crypto';
const {
    Schema
} = mongoose;
const slug = require('slug');
const shortid = require('shortid');

const userSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: '/assets/images/default.png',
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    socialId: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: 0
    },
    provider: {
        type: String,
        default: "Local"
    },
    wishList: {
        type: Schema.Types.ObjectId,
        ref: 'Wishlist'
    },
    address: [{
        street: String,
        city: String,
        state: String,
        zip: Number,
        primary: {
            type: Boolean,
            default: false
        }
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    history: [{
        order: {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    }],
    activationKey: {
        type: String,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    hash: String,
    salt: String
}, {
    timestamps: true
});


userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};
userSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    next();
});
userSchema.methods.slugify = function () {
    this.slug = slug(this.firstName) + '-' + shortid.generate();
};


userSchema.methods.generateJWT = () => {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        id: this._id,
        firstName: this.firstName,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};



export default mongoose.model('user', userSchema);