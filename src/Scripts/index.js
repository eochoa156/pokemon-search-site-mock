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

    await getPokemon()

    //await dbConnection close connection
    console.log('end')
    process.exit(0) //forces db connection to close
}

async function getPokemon () {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
}

main()