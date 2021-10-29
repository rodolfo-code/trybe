const net = require('net')

const connectedClients = []
let clientId = 0

const broadcastMessage = (from, message) => {
  connectedClients
  .filter((client) => client.id !== from.id)
  .forEach((client) => {
    client.write(message)
  })
}

const server = net.createServer((socket) => {
  console.log('novo cliente conectado')

  clientId += 1
  socket.id = `Client ${clientId}`

  socket.write(`Bem vindo ${socket.id}` )

  connectedClients.push(socket)
  
  broadcastMessage(socket, `O cliente ${socket.id} entrou`)
  
  socket.on('data', (data) => {
    console.log(data.toString())

    broadcastMessage(socket, `cliente#${socket.id} > ${data}`)
    
  })
})


server.listen(2501, () => {
  console.log('Websocket is running!')
})