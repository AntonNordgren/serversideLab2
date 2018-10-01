
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'webshop';
const cName = 'albums';

const products = [
    'Number of the Beast',
    'Piece of Mind',
    'Powerslave',
    'Somewhere In Time',
    'Seventh Son of a Seventh Son',
];

const category = [
    'CD',
    'Vinyl'
];

const maxPrice = 200;
const nrOfItems = 1000000;


MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    
    if (err) {
        console.log('ERROR cannot connect to MongoDB. Is the server running?,', err.message);
        return;
    }
    
    console.log("Conntected successfully to server");

    generateList = (products, category, maxPrice, nrOfItems) => {
    
        let newList = [];
    
        randomElement = (list) => {
            let r = Math.random() * list.length;
            return list[Math.floor(r)];
        }
        
        for (let i = 0; i < nrOfItems; i++) {
            newList.push({
                name: randomElement(products),
                price: Math.ceil(Math.random() * maxPrice),
                category: randomElement(category),
            })
        }
    
        return newList;
    
    }
    
    insterDocuments = (db, collection, products, category, generateList, maxPrice, nrOfItems) => {
        let list = generateList(products, category, maxPrice, nrOfItems);
        db.collection(collection).insertMany(list, (err) => {
            if (err) {
                console.log('Failed to insert data.', err);
                client.close();
                return;
            }
            console.log('Inserted data. Closing client');
            client.close();
        })
    }

    insterDocuments(client.db(dbName), cName, products, category, generateList, maxPrice, nrOfItems);
    client.close();

})