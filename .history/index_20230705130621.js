// testing data
const books = [
  {
    title: "Old Man's War",
    author: {
      firstName: "John",
      lastName: "Scalzi"
    }
  },
  {
    title: "The Lock Artist",
    author: {
      firstName: "Steve",
      lastName: "Hamilton"
    }
  },
  {
    title: "Jhon don",
    author: {
      firstName: "Steve",
      lastName: "Hamilton"
    }
  }
];

// dom elements
let searchBar = document.querySelector(".search");
let resultArea = document.querySelector(".result");

// fuse initialization and options
let options = {
  shouldSort: true,
  matchAllTokens: true,
  findAllMatches: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["title", "author.firstName"]
};

function searchFunc(value) {
  let resultObj = fuse.search(value);
  console.log(resultObj);
  

  resultArea.value = JSON.stringify(resultObj, null, 3);
};

let fuse = new Fuse(books, options);
searchBar.addEventListener("input", (e) => {
  searchFunc(e.target.value);
});
