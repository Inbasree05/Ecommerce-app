const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('🔄 Connecting to MongoDB Atlas...');
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Atlas connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`
❌ MongoDB connection failed!
--------------------------------------------------
Error Details: ${error.message}

To resolve this issue, please verify that:
1. Your MONGO_URI in 'backend/.env' is a valid MongoDB Atlas connection string.
2. Your current IP address is whitelisted in your MongoDB Atlas cluster (Network Access).
3. The database user credentials in the connection string are correct.
--------------------------------------------------
`);
    process.exit(1);
  }
};

module.exports = connectDB;