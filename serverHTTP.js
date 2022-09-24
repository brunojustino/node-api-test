const http =  require('http')

const mock  = [
    { id: 1, text: 'hi 1'},
    { id: 2, text: 'hi 2'},
    { id: 3, text: 'hi 3'}
]

const server = http.createServer( (req, res) => {
    // res.statusCode = 404
    // res.setHeader('Content-type', 'application/json')

    res.writeHead(404, {
        'Content-type': 'application/json'
    })

    let body = []
    req.on('data', chunk => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        console.log(body)
    })

    res.end(JSON.stringify({
        success: false,
        data: mock
    }))
})

server.listen(5000, () => console.log("server running"))