const net = require("net");
const {networkInterfaces }  = require("os")

const server = net.createServer(soket => {
    console.log(soket.remoteAddress); //get IP
    console.log(list);
    const list = networkInterfaces(); // get mac address 
    soket.write(" connecting session !!\n");
    soket.on("data", data => console.log(data.toString()));
})

server.listen(8080);
