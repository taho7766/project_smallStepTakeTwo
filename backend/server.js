require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');

const MONGO_URI = process.env.MONGO_URI;
const projectRoutes = require('./routes/projectRoutes');

// middleware
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error(err));

//simple route
app.get('/', (req, res) => {
    res.send('backend says hi');
});

app.use('/projects', projectRoutes);
app.use('/users', userRoutes)

const PORT = process.env.PORT || 5000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong.');
});

app.listen(PORT, () => {
    console.log('Server is running on port ${5000}');
});