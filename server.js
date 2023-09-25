import { Server } from "socket.io";
// import { createServer } from "http";

let info = ""

// const httpServer = createServer();

const io = new Server(process.env.PORT || 4000, {
  cors: {
    origin:"*",
    methods:["GET","POST"],
    credentials: true
  },
});

// const port = 4000;
// httpServer.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


io.on("connection", (socket) => {
  io.emit('serverMsg', info);

  socket.on("getInfo",()=>{
    io.emit('serverMsg', info);
  })

  socket.on("clientUpdate", (text) => {
    // console.log(text);
    info = text;
    io.emit('serverMsg', text);
  });
});
