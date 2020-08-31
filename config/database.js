const { connect } = require('mongoose');

const connectDatabase = async() => {
  try {
    await connect(process.env.MONGODB_URI_DATABASE || 'mongodb://localhost:27017/dbmarketplace',
      { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    );
    console.log('Database connected successfully');
  } catch (error) {
    console.log(`Database connection failed: ${error.message}`);
  }
}

module.exports = { connectDatabase };

