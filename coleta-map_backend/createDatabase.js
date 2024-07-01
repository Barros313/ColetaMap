const axios = require('axios');
const csv = require('csvtojson');
const mongoose = require('mongoose');

const PontosColeta = require('./models/PontosColeta');

const MONGO_URI = "mongodb://localhost:27017/coletamap-app";

const csvUrl = "http://dados.recife.pe.gov.br/dataset/10a009f2-f9bb-457b-8f78-d8f0dc3ced37/resource/ef521704-6960-4ef1-8f98-a60db4a0d79b/download/pontos_coleta.csv";

async function fetchAndParseUrl(url) {
    try {
        const response = await axios.get(url);
        const csvData = response.data;

        return await csv({ delimiter: ';' }).fromString(csvData);
    } catch (error) {
        console.error("Error fetching or parsing CSV: ", error);
    }
}

async function insertIntoMongoDB(data){
    try {
        await mongoose.connect(MONGO_URI);

        const result = await PontosColeta.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted.`);
    } catch (error) {
        console.error("Error inserting data into MongoDB: ", error);
    } finally {
        await mongoose.disconnect();
    }
}

async function createDatabase() {
    const data = await fetchAndParseUrl(csvUrl);

    if (data) {
        await insertIntoMongoDB(data);
    }
}

createDatabase();