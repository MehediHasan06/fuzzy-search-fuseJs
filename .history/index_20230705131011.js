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
  let resultArr = fuse.search(value);
  console.log(resultArr);

  resultArr.length > 0 && 
  resultArr.forEach(element => {
    console.log(element.item.title);
  });
  

  resultArea.value = JSON.stringify(resultArr, null, 3);
};

let fuse = new Fuse(books, options);
searchBar.addEventListener("input", (e) => {
  searchFunc(e.target.value);
});
