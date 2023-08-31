const io = require('socket.io-client');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../chat/chat-app.js');  // path to your server file
const should = chai.should();

chai.use(chaiHttp);

describe('Chat', function () {
    let clientSocket;

    beforeEach((done) => {
        // Connect a new client socket for each test
        clientSocket = io.connect('http://localhost:3000');
        clientSocket.on('connect', done);
    });

    afterEach((done) => {
        // Disconnect the client socket after each test
        if (clientSocket.connected) {
            clientSocket.disconnect();
        }
        done();
    });

    it('should receive message when a new user joins', (done) => {
        const username = "TestUser";
        clientSocket.emit('new user', username);
        clientSocket.on('user entered', (message) => {
            message.should.be.a('string');
            message.should.eql(`${username}`); //has entered the chat`);
            done();
        });
    });

    it('should receive a chat message with the correct username', (done) => {
        const username = "TestUser";
        const testMessage = "Hello World!";
        clientSocket.emit('new user', username);
        clientSocket.emit('chat message', testMessage);
        clientSocket.on('chat message', (message) => {
            message.should.be.a('string');
            message.should.eql(`${username}: ${testMessage}`);
            done();
        });
    });

    // ... other tests as necessary ...
});