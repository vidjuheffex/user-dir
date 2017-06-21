const express = require('express');
const data = require('./data.js');
const core = require('./js/core.js');
const mustacheExpress = require('mustache-express');
const port = 3000;

var app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(express.static("./public"));
app.use(express.static("./js"));

app.get("/", (req,res) => {
    res.render("main", data);
});

app.get("/user/:id", (req, res)  => {
    res.render("user", data.users.find(x => x.id == req.params.id));
});

app.listen(port, ()=> console.log("Server running at: ", port));
