const net = require('net')

const connectedClients = []
let clientId = 0

const server = net.createServer((socket) => {
  console.log('novo cliente conectado')

  clientId += 1
  socket.id = `Client ${clientId}`

  socket.write(`Bem vindo ${socket.id}` )

  connectedClients.push(socket)
  
  connectedClients.forEach((client) => {
    client.write(`O client ${socket.id} se conectou`)
  })
  
  socket.on('data', (data) => {
    console.log(data.toString())
  })
})


server.listen(2501, () => {
  console.log('Websocket is running!')
})