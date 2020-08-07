const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology:true,
            useCreateIndex:true,
            useNewUrlParser:true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red)
        

    }
}

module.exports = connectDB;