const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});
server.listen(3000, "localhost", ()=> {
    console.log("listening for request on port 3000")
});

https://youtu.be/DQD00NAUPNk?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=3