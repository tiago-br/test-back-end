const ordenaLista = require('./routes/ordenaLista.route')
const interlace = require('./routes/interlace?.route')
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/", ordenaLista)
app.use("/", interlace)

app.listen(port, () => console.log(`My app listening on port ${port}`));
