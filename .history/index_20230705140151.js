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
let suggestionsArea = document.querySelector("ul");

// search functionality
function searchFunc(value) {
  let resultArr = fuse.search(value);
  console.log(resultArr);

  if(resultArr.length > 0){
    suggestionsArea.innerHTML = "";
    resultArr.forEach(element => {
      console.log(element.item.title);

      const listTitle = document.createElement("li");
      listTitle.innerText = element.item.title;
      suggestionsArea.appendChild(listTitle);
    });
  } else {
    suggestionsArea.innerHTML = "";
  }
  

  // resultArea.value = JSON.stringify(resultArr, null, 3);
};
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

let fuse = new Fuse(books, options);
searchBar.addEventListener("input", (e) => {
  searchFunc(e.target.value);
});
