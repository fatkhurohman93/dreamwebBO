const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path));


const corsOptions = {
  origin: "*",

}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended : false}));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// const path = __dirname + '/app/views/';

app.get('/items', (req, res) => {
  res.sendFile(path + "index.html");
})

app.get('/add', (req, res) => {
  res.sendFile(path + "index.html");
})

app.get('/items/:id', (req, res) => {
  res.sendFile(path + "index.html");
})


app.get('/', cors(corsOptions),  (req,res) => {
  res.sendFile(path + "index.html");
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


