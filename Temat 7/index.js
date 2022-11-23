const { MongoClient } = require('mongodb')
const assert = require('assert')

// Connection URL
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'galleryDB'

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err)
    console.log("Connected successfully to server")

    const db = client.db(dbName)

    db.collection('users').insertOne({
        name: "Tadeusz",
        surname: "Kowalski"
    }, (error, result) => {
        if (error) console.log(error)
        else console.log("git")
    })

    process.on('SIGINT', function() {
        client.close(function () {
            console.log('Mongoose disconnected on app termination');
            process.exit(0);
        });
    });
})

