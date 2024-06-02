const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    pokemonId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)