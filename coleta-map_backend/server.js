const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI + "/coletamap-app";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const authenticationRoute = require('./routes/authentication');
app.use('/auth', authenticationRoute);

const databaseRoute = require('./routes/database');
app.use('/pontos', databaseRoute);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));