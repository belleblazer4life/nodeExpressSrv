const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("./public/index.html");
});

app.get("/data", (req, res, next) => {
  fetch(
    "https://api.apify.com/v2/key-value-stores/vqnEUe7VtKNMqGqFF/records/LATEST?disableRedirect=true"
  )
    .then((response) => response.json())
    .then((data) => {
      res.send(data.infectedByRegion);
      fs.writeFileSync(
        "public/covidData.json",
        JSON.stringify(data.infectedByRegion, undefined, 3)
      );
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`App listening at server on http://localhost:${port}`);
});
