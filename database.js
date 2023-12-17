const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;


function fetchUserData(userId) {
    // Placeholder for fetching user data from the database
}

function saveUserData(userId, data) {
    // Placeholder for saving user data to the database
}

// Export these functions if using a module system
