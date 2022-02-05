const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

function serverStaticFile(res,path,contentType, responseCode = 200){

	fs.readFile(__dirname + path, (err,data) => {
		if (err) {
			res.writeHead(500, {'Content-Type':'text/plain'})
			return res.end ('500 - Internal Error')
		}
		res.writeHead(responseCode, {'Content-Type':contentType})
		res.end(data)
	})

}

switch(path) {
	case '':
		serverStaticFile(res, '/public/home.html','text/html')
		break
	case '/index':
		serverStaticFile(res, '/public/index.html','text/html')
		break
	case '/dados1.jpg':
		serverStaticFile(res, '/public/dados1.jpg','image/jpg')
	break
}
})

server.listen(port, ()=> console.log('servidor inicializado em ${port}' + 'pressione CTRL + C para terminar!'))