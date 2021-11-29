const csv = require("csvtojson");

const csvFilePath = "./data/magazines.csv";

var searchByISBN = async function cs(isb) {
  const res = await csv().fromFile(csvFilePath);
  console.log(res.find((i) => i.isbn === isb));
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your isbn?`, (isb) => {
  searchByISBN(isb);
  readline.close();
});
