const net = require('net')

const client = new net.Socket()

client.connect(2501, 'localhost', () => {
  client.write('ola cheguei agora')
})

client.on('data', (data) =>{
  console.log(data.toString())
})