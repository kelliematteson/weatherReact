require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;


//Body Parser Middleware below to give access to req.body
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use((req, res, next ) => {
    console.log(req.body)
    next()
});

//connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true
})

mongoose.connection.once('connected', () => {
    console.log('MongoDB database connection successful!')
});

//Port Listener
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
});