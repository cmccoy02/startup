const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const config = require('./dbConfig.json'); // Adjust the path as needed

// Constructing the MongoDB URI
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

// Get the database object
function getDB() {
    if (!db) {
        throw new Error("No Database Found!");
    }
    return db;
}

// Add a new user with hashed password
async function addUser(username, password) {
    const collection = db.collection('users');
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await collection.insertOne({ username, password: hashedPassword });
    return result.insertedId;
}

// Find a user by their username
async function findUser(username) {
    const collection = db.collection('users');
    return await collection.findOne({ username });
}

module.exports = { connectDB, getDB, addUser, findUser };
