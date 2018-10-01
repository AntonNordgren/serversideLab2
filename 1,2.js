
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const databaseName = 'webshop';
const collectionName = 'albums';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    client.db(databaseName).collection(collectionName, (err, collection) => {

        if (err) throw err;

        collection.remove({},(err, result) => {
            
            if (err) throw err;

            console.log("Collection is deleted! " + result);

            client.close();
        });
    });
});