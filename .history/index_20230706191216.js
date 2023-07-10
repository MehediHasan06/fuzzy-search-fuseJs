// testing data
const bookStoreFaq = [
  {
    "question": "Do you offer international shipping?",
    "answer": "Yes, we offer international shipping to select countries. Please contact our customer support for more information on international shipping options."
  },
  {
    "question": "What is your return policy?",
    "answer": "We accept returns within 30 days of purchase, provided the item is in its original condition. Please refer to our Returns & Refunds page for detailed instructions on how to initiate a return."
  },
  {
    "question": "Do you have a loyalty program?",
    "answer": "Yes, we have a loyalty program called 'Bookworm Rewards.' It offers various benefits, including discounts, exclusive offers, and early access to promotions. You can sign up for free at any of our store locations or online."
  },
  {
    "question": "Can I order a book that is currently out of stock?",
    "answer": "Yes, you can place a special order for books that are currently out of stock. Please provide the title and author information, and our staff will assist you in placing the order. Note that availability and delivery times may vary for special orders."
  },
  {
    "question": "Do you organize book signings or author events?",
    "answer": "Yes, we regularly host book signings, author readings, and other literary events. Please check our Events page or sign up for our newsletter to stay updated on upcoming events. You can also follow us on social media for event announcements and updates."
  }
];


// dom elements
let searchBar = document.querySelector(".search");
// let resultArea = document.querySelector(".result");  
let suggestionsArea = document.querySelector("ul");

// search and match functionality
// function findMatches(wordToMatch){
//   return bookStoreFaq.filter(faq => {
//     var regex = new RegExp(wordToMatch, 'gi');
//     return faq.question.match(regex);
//   });
// };

function searchFunc(value) {
  let resultArr = fuse.search(value);
  // const matches = findMatches(value);

  // console.log(matches);
  console.log(value);

  const html = resultArr.map((match) => {
    const regex = new RegExp(value, 'gi');
    console.log(match);
    
    const questionValue = !(value === "") ? 
      match.item.question.replace(regex, `<span class="match">${value}</span>`) : ``;
    return !(questionValue === "") ? `<li>${questionValue}</li>` : ``;

  }).join(' ');
  suggestionsArea.innerHTML = html;
  

  // resultArea.value = JSON.stringify(resultArr, null, 3);
};

// fuse initialization and options
let options = {
  includeScore: true,
  shouldSort: true,
  matchAllTokens: true,
  findAllMatches: true,
  threshold: 0.4,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["question"]
};

let fuse = new Fuse(bookStoreFaq, options);
searchBar.addEventListener("input", (e) => {
  searchFunc(e.target.value);
});
