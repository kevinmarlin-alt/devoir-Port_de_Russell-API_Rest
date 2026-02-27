const mongoose = require('mongoose');

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { dbName: "apinode" });
        console.log('Connected to MongoDB');
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}