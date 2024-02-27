const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dateDePublication: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', postSchema);
