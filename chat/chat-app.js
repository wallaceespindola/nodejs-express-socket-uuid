const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

console.log(`####### NODE CHAT SERVER IMPROVED #######`);

// This line is important: it tells Express to serve static files (html, css) from the "public" directory
app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('new user', (username) => {
        socket.username = username;
        io.emit('user entered', username);  // Notify all users including sender
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', `${socket.username}: ${msg}`);
    });
});

server.listen(3000, () => {
    console.log('listening on http://localhost:3000/');
    
});
