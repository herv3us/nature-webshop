require('dotenv').config();
const config = require('./utilities/config');
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || process.env.REACT_APP_PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello world! 🐳');
// });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database...');
  })
  .catch((err) => {
    console.log('There was an error connecting to the database: ', err);
  });
