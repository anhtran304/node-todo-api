// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.', err);
  }
  console.log('Connected to MongoDB.');

  db.collection('Todos').find({
    name: 'Anna'
  }).toArray((err, docs) => {
    if (err) {
      return console.log('Unable to fetch data for Todos Apps', err);
    }
    console.log(JSON.stringify(docs, undefined, 2));
  });

  db.close();
});
