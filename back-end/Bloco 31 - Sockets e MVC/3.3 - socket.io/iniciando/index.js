const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

require('./socket/ping')(io);
require('./socket/chat')(io);

app.use(express.static(__dirname + '/public'));

// io.on('connection', (socket) => {
//   console.log(`Usuário conectado. ID: ${socket.id} `);

//   socket.emit(
//     'ola',
//     'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)',
//   );

//   socket.on('ping', () => {
//     console.log(`${socket.id} emitiu um ping!`);

//     io.emit('pong', `${socket.id} enviou um ping!`);
//   });
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/chat.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
