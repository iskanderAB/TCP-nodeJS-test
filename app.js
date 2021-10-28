const net = require("net");

const server = net.createServer(soket => {
    soket.write(" connecting session !!\n");
    soket.on("data", data => console.log(data.toString()));
})

server.listen(8080);
