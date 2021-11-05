const firebase = require('firebase');
require('firebase/firebase-storage')
// Importing our configuration to initialize our app
const config = require('../utils/config');
// Creates and initializes a Firebase app instance. Pass options as param
const db = firebase.initializeApp(config.firebaseConfig);
firebase.storage();
module.exports = {db};