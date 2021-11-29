const http = require("https");
const fs = require("fs");

const urlBooks =
  "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv"; // link to file you want to download
const pathBooks = "./download/books.csv"; // where to save a file

const urlAuthors =
  "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv"; // link to file you want to download
const pathAuthors = "./download/authors.csv"; // where to save a file

const urlMagazines =
  "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv"; // link to file you want to download
const pathMagazines = "./download/magazines.csv"; // where to save a file

function Download(url, path) {
  const request = http.get(url, function (response) {
    if (response.statusCode === 200) {
      var file = fs.createWriteStream(path);
      response.pipe(file);
    }
    request.setTimeout(100000, () => {
      console.log("Cant download!!");
      // if after 60s file not downlaoded, we abort a request
    });
  });
}

Download(urlBooks, pathBooks);
Download(urlAuthors, pathAuthors);
Download(urlMagazines, pathMagazines);

// further optimization - loop object of url instead of calling function thrice
