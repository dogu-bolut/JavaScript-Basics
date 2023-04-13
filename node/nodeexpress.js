let express = require("express");

let localServer = express();
localServer.use(express.urlencoded({ extended: false }));

localServer.get("/", function (req, res) {
    res.send(`
    <body style="background-color:darkgreen">
        <form action="/answer" method="POST">
            <p>What is the color of my website</p>
            <input name="websiteColor" autocomplete="off">
            <button>Submit Answer</button>
            <br><br><a rel="stylesheet" href="/answer">Answer</a>
        </form>
    </body>
    `)
})

localServer.post("/answer", function (req, res) {
    if (req.body.websiteColor.toUpperCase() == "GREEN") {
        res.send(`
        <p>Congratulation, you typed correct color!!</p>
        <a rel="stylesheet" href="/">Back to HomePage</a>
        `)
    } else {
        res.send(`
        <p>Sorry, that is incorrect!!</p>
        <a rel="stylesheet" href="/">Back to HomePage</a>
        `)
    }
})

localServer.get("/answer", function (req, res) {
    res.send("This page only for form submitters");
})

localServer.listen(3000);