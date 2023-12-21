const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json'); // Adjust the path if necessary

const uri = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        db = client.db(config.dbName);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
        process.exit(1);
    }
}

function getDB() {
    if (!db) {
        throw new Error("No Database Found!");
    }
    return db;
}

async function addDocument(collectionName, document) {
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(document);
    return result.insertedId;
}

async function findDocuments(collectionName, query, options = {}) {
    const collection = db.collection(collectionName);
    const documents = await collection.find(query, options).toArray();
    return documents;
}

async function updateDocument(collectionName, query, update) {
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(query, { $set: update });
    return result.modifiedCount;
}

async function deleteDocument(collectionName, query) {
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne(query);
    return result.deletedCount;
}

module.exports = { connectDB, getDB, addDocument, findDocuments, updateDocument, deleteDocument };
