var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
  type: String,
  require: true,
  minlength: 1,
  trim: true,
  validate: {
    validator: (email) => {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(email);
    }
  }
}
});

var Users = mongoose.model('Users', userSchema);

module.exports = {Users};
