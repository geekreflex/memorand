const mongoose = require('mongoose');

const uri =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGO_URI_LOCAL
    : process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error('Unable to connect ', error);
  }
};

module.exports = connectDB;
