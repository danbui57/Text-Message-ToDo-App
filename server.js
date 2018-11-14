const express = require("express");
const ejs = require("ejs");
const socketio = require("socket.io");
const bodyParser = require("body-parser");
const nexmo = require("nexmo");

const app = express();

const PORT = 8000;

app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.use(express.static("public"))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
res.render("index")
})

const server = app.listen(PORT, () => console.log("listening on http://localhost:" + PORT))