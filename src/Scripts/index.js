const mongoose = require('mongoose')
require('dotenv').config()
const Pokemon = require('../Models/Pokemon')

let dbConnection

async function main () {
    console.log('start')
    try {
        //db connection
        dbConnection = await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connected')
    } catch (error) {
        console.log('error connectiong to the database', error)
    }

    await Pokemon.deleteMany()
    await getPokemon()

    //await dbConnection close connection
    console.log('end')
    process.exit(0) //forces db connection to close
}

async function getPokemon () {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=50'
    while (url) {
        const response = await fetch(url)
        const data = await response.json()

        //const pokemonUrls = data.results.map(pokemon => pokemon.url)
        const promises = data.results.map(pokemon => {
            return processPokemon(pokemon.url)
        })

        const pokemonToSave = await Promise.all(promises)
        await Pokemon.insertMany(pokemonToSave)
        url = data.next
        console.log(data)
    }
    
}

async function processPokemon(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return {
            pokemonId: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            image: data.sprites.front_default,
            generation: data.generation
        }
    } catch (error) {
        console.log('error processing pokemon', error)
    }
    console.log(pokemon)
}

main()