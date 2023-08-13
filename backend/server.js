const express = require('express');
const cors = requrie('cors');
const app = express();
const MONGO_URI = 'mongodb+srv://taho7766:Boxhead9802@projectportfolio.wxz5wab.mongodb.net/?retryWrites=true&w=majority';

// middleware
app.use(cors());
app.use(express.json());

//simple route
app.get('/', (req, res) => {
    res.send('backend says hi');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error(err));