var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(url);

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

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

var newUser = new Users({
  email: 'tranm@rgmail.com'
});

newUser.save().then((doc) => {
  console.log(doc);
}, (e) => {
  console.log('Unable to save User', e);
});
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   text: 'Feed the cat',
//   completed: true,
//   completedAt: 123
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });
