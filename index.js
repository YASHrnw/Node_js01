

const http = require('http');

const dataControl = (req, resp) => {
    resp.write("<h1>Hello, this is Mufij</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4501, () => {
    console.log("Server is listening on port 4501");
});
