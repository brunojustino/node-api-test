const express = require('express')
const { getClientes, getCliente, createCliente, updateCliente, deleteCliente } = require('../controllers/clientes')

const router = express.Router()

router.route('/')
    .get(getClientes)
    .post(createCliente)

router.route('/:id')
    .get(getCliente)
    .put(updateCliente)
    .delete(deleteCliente)


module.exports = router
