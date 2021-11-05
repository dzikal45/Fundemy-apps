const config = process.env;
const multer = require('multer');

const storage = multer.memoryStorage();
multer({ storage: storage }).single('file');

