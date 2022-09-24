const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

//Routes
const clientes = require('./routes/clientes')

dotenv.config({ path: './config/config.env' })

const app = express()

//dev log middleware
if(process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}

// montar rotas

app.use('/api/v1/clientes', clientes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log( `Server running`))