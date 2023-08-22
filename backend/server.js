const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const MONGO_URI = 'mongodb+srv://taho7766:Boxhead9802@projectportfolio.wxz5wab.mongodb.net/?retryWrites=true&w=majority';
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
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on port 5000');
});