const mongoose = require('mongoose');
require('dotenv/config');
mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log('koneksi berhasil'))
.catch((err)=>{
    console.error(`Error connecting to the database. \n${err}`);

}
);
