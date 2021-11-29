const csv = require("csvtojson");

var fs = require("fs");
fs.readFile("./data/books.csv", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/;/g, ",");

  fs.writeFile("./data/books.csv", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

const csvFilePath = "./data/books.csv";

// csv()
//   .fromFile(csvFilePath)
//   .then((jsonObj) => {
//     console.log(jsonObj);
//   });

async function cs() {
  let res = await csv().fromFile(csvFilePath);
  console.log(res);
}
// const AUTHORS = await csv().fromFile("./data/authors.csv");
// console.log(AUTHORS);
cs();
