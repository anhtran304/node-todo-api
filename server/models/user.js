const mongoose = require('mongoose');
const validator = require('validator');


var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
  type: String,
  require: true,
  minlength: 1,
  trim: true,
  unique: true,
  validate: {
    validator: validator.isEmail,
    message: '${email} is not a valid email!'
  }
},
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  token: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

var Users = mongoose.model('Users', userSchema);

module.exports = {Users};
