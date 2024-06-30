const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pontosColetaSchema = new Schema({
    tiporesiduo: { type: String, required: true },
    bairro: { type: String, required: true },
    endereco: { type: String, required: true },
    complemento: { type: String, required: false },
    observacao: { type: String, required: false },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
});

const PontosColeta = mongoose.model('PontosColeta', pontosColetaSchema);

module.exports = PontosColeta;