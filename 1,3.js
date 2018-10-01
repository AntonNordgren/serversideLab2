
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const databaseName = 'webshop';
const collectionName = 'albums';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    client.db(databaseName).collection(collectionName).find().limit(8).toArray((err, result) => {
        if( err ) throw err;
        console.log(result);
        client.close();
    })

});