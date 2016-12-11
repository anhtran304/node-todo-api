const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '584d1a769d15a3125d2625fb'

// Todo.find({
//   _id: id
// }).then((todos) => {
//   return console.log(`Todos: ${todos}`);
// });

// if (!ObjectID.isValid(id)) {
//    console.log('Id is not valid');
// };
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(`Todo: ${todo}`);
// }).catch((e) => {
//   console.log(e);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   } console.log(`To do By ID ${todo}`);
// }).catch((e) => console.log(e));
