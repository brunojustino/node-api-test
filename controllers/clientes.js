// @desc mostra todos os clientes
// @route GET /api/v1/clientes
// @access Public
exports.getClientes = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'retorna todos os clientes'})
}

// @desc mostra 1 unico clientes
// @route GET /api/v1/clientes/:id
// @access Public
exports.getCliente = (req, res, next) => {
    res.status(200).json({ success: true, msg: `retorna 1 cliente ${req.params.id}`})
}

// @desc cria 1 cliente
// @route POST /api/v1/clientes
// @access Private
exports.createCliente = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'cria novo cliente'})
}

// @desc atualiza cliente
// @route PUT /api/v1/clientes/:id
// @access Private
exports.updateCliente = (req, res, next) => {
    res.status(200).json({ success: true, msg: `atualiza cliente ${req.params.id}`})
}

// @desc delete 1 cliente
// @route DELETE /api/v1/clientes/:id
// @access Private
exports.deleteCliente = (req, res, next) => {
    res.status(200).json({ success: true, msg: `deleta cliente ${req.params.id}`})
}