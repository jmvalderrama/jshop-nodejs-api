const app = require('./config/app');
const { connectDatabase } = require('./config/database');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const main = async() => {
  try {
    await connectDatabase();
    await app.listen(PORT);
    console.log('Server started');
  } catch (error) {
    console.log('Error on starting server: ', error.message)
  }
}

main();