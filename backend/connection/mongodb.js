const mongoose = require('mongoose');
require('dotenv/config');
mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log('koneksi berhasil'))
.catch((err)=>{
    console.log(err)

}
);
