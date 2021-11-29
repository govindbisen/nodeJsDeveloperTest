const csv = require("csvtojson");
const fs = require("fs");

fs.readFile("./data/authors.csv", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/;/g, ",");

  fs.writeFile("./data/authors.csv", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

const csvFilePath = "./data/authors.csv";

async function cs() {
  let res = await csv().fromFile(csvFilePath);
  console.log(res);
}
// const AUTHORS = await csv().fromFile("./data/authors.csv");
// console.log(AUTHORS);
cs();
