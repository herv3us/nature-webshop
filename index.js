const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world! 🐳');
});

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});
