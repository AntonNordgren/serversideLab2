
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const databaseName = 'webshop';
const collectionName = 'albums';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    client.db(databaseName).collection(collectionName).createIndex( { price : -1, name : 1 } , (err, result) => {
        console.log(result)
        client.close();
    })

});