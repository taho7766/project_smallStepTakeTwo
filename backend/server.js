require('dotenv').config({ path: '../.env' });

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors({ 
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error(err));

//simple route

app.use('/projects', projectRoutes);
app.use('/users', userRoutes)

app.use((err, req, res, next) => {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).send('Something went wrong.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});