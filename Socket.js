const Server = require('socket.io');
class Socket {
    io = null;
    conectedIds = {};

    constructor(server) {
        try {
            this.io = Server(server, { cors: { origin: "*" }, methods: ['GET', 'POST'] });

            if (this.io) {
                console.log("Socket Connected Successfully");
            }

            this.io.on("connection", socket => {
                socket.on("new-connection", data => {
                    this.conectedIds[data] = socket.id;
                });
            })
        } catch (error) {
            console.log("socket error: " + error);
        }
    }

    notification(event, data, to = null) {
        if (to) {
            this.io.to(this.conectedIds[to]).emit(event, data);
        } else {
            this.io.sockets.emit(event, data);
        }
    }
}

module.exports = Socket;