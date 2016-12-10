// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.', err);
  }
  console.log('Connected to MongoDB.');

  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').insertOne({
  //   name: 'Ken',
  //   age: '31',
  //   location: 'Victoria'
  // }).then((result) => {
  //   console.log(JSON.stringify(result.ops[0], undefined, 2));
  // });

  db.collection('Users').find({age}.forEach((obj) => {
    obj.age = new NumberInt(obj.age)
    db.save();
  }));

  db.collection('Users').findOneAndUpdate({name: 'Ken Tran'},
  { $inc: {age: -1} },
  { returnOriginal: false}
).then((result) => {
  console.log(result);
});

  db.close();
});
