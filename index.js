

const http = require('http');

const dataControl = (req, resp) => {
    resp.write("<h1>yash</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4501, () => {
    console.log("Server is listening on port 4501");
});
