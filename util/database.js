const mongodb = require('mongodb');
require('dotenv').config();

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(process.env.MONGODB_CONNECTION)
    .then((client) => {
        console.log('connected!');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
    })
}


const getDb = () => {
    if(_db) {
        return _db;
    }

    throw "No Database Found!";
}

exports.mongoConnect = mongoConnect;
exports. getDb = getDb;