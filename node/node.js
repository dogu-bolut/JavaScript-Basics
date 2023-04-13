let http = require("http");

let appServer = http.createServer(function (req, res) {

    if (req.url == "/") {
        res.end("Hello, welcome to home page");
    }
    else if (req.url == "/about") {
        res.end("Thanks for interest our company");
    }
    else {
        res.end("We dont have a page named like that");
    }
});

appServer.listen(3000);