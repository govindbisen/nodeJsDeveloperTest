const csv = require("csvtojson");

// function to find Magazines by author name
const csvFilePath1 = "./data/magazines.csv";
var searchMagazineByAuthorsName = async function cs(n) {
  const res = await csv().fromFile(csvFilePath1);
  console.log(`Magazines by Author ${n}`);
  console.log(res.find((i) => i.authors === n));
};
// function to find books by author name
const csvFilePath2 = "./data/books.csv";
var searchBookByAuthorsName = async function cs(n) {
  const res = await csv().fromFile(csvFilePath2);
  console.log(`Books by Author ${n}`);
  console.log(res.find((i) => i.authors === n));
};

// reading input from terminal and functions call to find books/magazines ---
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`What's name of Author?`, (name) => {
  searchMagazineByAuthorsName(name);
  console.log(`Books by Author ${name}`);
  searchBookByAuthorsName(name);
  readline.close();
});
