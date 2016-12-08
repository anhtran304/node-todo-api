// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.', err);
  }
  console.log('Connected to MongoDB.');

db.collection('Todos').insertOne({
  name: 'Anna',
  age: '24'
}, (err, result) => {
  if (err) {
    return console.log('Unable to insert documents to Todos Collection.', err);
  }
  console.log(result.ops[0]._id.getTimestamp());
  console.log(result.ops[0]);

  db.close();
});


});
