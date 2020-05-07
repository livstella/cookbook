const express = require("express");
const bodyparser = require("body-parser");
const measurement_unit_route = require("./measurement_unit_route");

const app = express();
const port = 8000;

app.use(bodyparser.urlencoded());
app.use("/", measurement_unit_route);

app.listen(port, () => {
  console.log("Server is up and running!");
});
