const mongoose = require('mongoose'); // Import mongoose library
const bcrypt = require('bcrypt'); // Import bcrypt library

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
    if (!user.isModified('password')) return next(); // If password is not modified, move to the next middleware

    try {
        const salt = await bcrypt.genSalt(10); // Generate a salt with cost factor 10
        const hashedPassword = await bcrypt.hash(user.password, salt); // Hash the password using the generated salt
        user.password = hashedPassword; // Set the hashed password as the new password
        next(); // Move to the next middleware
    } catch (error) {
        return next(error); // Pass the error to the next middleware
    }
});

const User = mongoose.model('User', userSchema); // Create a User model using the userSchema

module.exports = User; // Export the User model
