const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash the password before saving
userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next(); 

    try {
        // Generate a salt with cost factor 10
        const salt = await bcrypt.genSalt(10); 
        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(user.password, salt); 
        // Set the hashed password as the new password
        user.password = hashedPassword; 
        next(); 
    } catch (error) {
        return next(error); 
    }
});
// Create a User model
const User = mongoose.model('User', userSchema); 

module.exports = User;