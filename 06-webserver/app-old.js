
const http = require('http');

http.createServer((request, response) => {

    //response.writeHead(200, {'Content-Type': 'application/Json'})


    response.write('Hola mundo');

    response.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);