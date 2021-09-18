if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute');
const noteRoute = require('./routes/noteRoute');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.use('/api/users', userRoute);
app.use('/api/notes', noteRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
