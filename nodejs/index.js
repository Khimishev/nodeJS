const http = require('http')

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(`
            <h1>Form</h1>
            <form method="post" action="/">
                <input name="title" type="text" />
                <button type="submit">Send</button>
            </form>
        `)
    } else if( req.method === 'POST'){
        res.end(`
            <h1>Message</h1>
        `)
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})