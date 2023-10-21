require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Marketplace API!');
});


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas!');
}).catch(err => {
    console.error('Error connecting:', err.stack);
});

app.use(express.json());
app.use(productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});