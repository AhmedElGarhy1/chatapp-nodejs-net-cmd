const net = require("net");

const server = net.createServer((socket) => {});

const users = [];

server.on("connection", (socket) => {
  const id = users.length + 1;

  users.forEach((user) => {
    user.socket.write(`User ${id} Joined!!`);
  });

  users.push({ socket, id });

  socket.on("close", () => {
    users.filter((user) => user.id !== id);
    users.forEach((user) => {
      user.socket.write(`User ${id} Left!!`);
    });
  });

  socket.on("error", (error) => {});

  // listen on events
  socket.on("data", (chunck) => {
    const data = chunck.toString();
    users.forEach((user) => {
      user.socket.write(`id-${user.id}-message-${data}`);
    });
  });
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log("Listening on PORT: " + PORT);
});
