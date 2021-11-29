const fs = require("fs");
const csv = require("csv-parser");

const authersArray = [];
const booksArray = [];
const magazinesArray = [];

//! Authors -
fs.readFile("./data/authors.csv", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/;/g, ",");
  fs.writeFile("./data/authors.csv", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

fs.createReadStream("./data/authors.csv")
  .pipe(csv({}))
  .on("data", (data) => authersArray.push(data))
  .on("end", () => console.log(authersArray));

//! Books
fs.readFile("./data/books.csv", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/;/g, ",");
  fs.writeFile("./data/books.csv", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

fs.createReadStream("./data/books.csv")
  .pipe(csv({}))
  .on("data", (data) => booksArray.push(data))
  .on("end", () => console.log(booksArray));

// ! magazines

fs.readFile("./data/magazines.csv", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/;/g, ",");
  fs.writeFile("./data/magazines.csv", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
fs.createReadStream("./data/magazines.csv")
  .pipe(csv({}))
  .on("data", (data) => magazinesArray.push(data))
  .on("end", () => console.log(magazinesArray));
