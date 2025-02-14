// You have an array of items in a shopping cart, each with a price and quantity.
// Write a function to calculate the total price, applying a 10% discount if the total is above 100.

// const cart = [
//   { item: "Laptop", price: 800, quantity: 1 },
//   { item: "Mouse", price: 20, quantity: 2 },
//   { item: "Keyboard", price: 50, quantity: 1 }
// ];


// let reduced=cart.reduce((a,b)=>a+b['price']*b['quantity'],0)
// console.log(reduced>=100?reduced-reduced*0.1:reduced)

//A traffic light changes based on car density:
// High traffic → green light for 60 seconds
// Medium traffic → green light for 40 seconds
// Low traffic → green light for 20 seconds
// Write a function that takes the number of cars and returns the green light duration. b


// let carTraffic=(traffic)=>{
//     if(traffic>=50){
//         return "60 seconds"
//     }else if(traffic>=20){
//         return "40 seconds"
//     }else if(traffic>=10){
//         return "20second"
//     }
// }

// console.log(carTraffic(50))

// *Auto-Suggestion in Search Bar*
// Implement a simple auto-suggest system:
// Given an array of words and a user input, return possible suggestions.
// const words = ["apple", "banana", "grape", "apricot", "avocado"];

// function autoSuggest(input) {
//   return words.filter((a)=>a.startsWith(input))
// }

// console.log(autoSuggest("ap")); 


// *Movie Recommendation System* 
// Scenario: Build a simple recommendation system that suggests movies based on a user's favorite genre.

// const movies = [
//   { title: "Inception", genre: "Sci-Fi" },
//   { title: "The Godfather", genre: "Crime" },
//   { title: "Interstellar", genre: "Sci-Fi" },
//   { title: "Joker", genre: "Drama" },
//   { title: "Avengers", genre: "Action" }
// ];

// function recommendMovies(favoriteGenre) {
//     const filteredValue=movies.filter((a)=>a['genre'].includes(favoriteGenre))
//     return filteredValue
  
// }

// console.log(recommendMovies("Sc"));  



// *Online Store Product Filter* 
// Scenario: You have an e-commerce store and want to filter products based on a search query.
// const products = [
//   { name: "iPhone 13", category: "Electronics" },
//   { name: "MacBook Pro", category: "Electronics" },
//   { name: "Nike Shoes", category: "Fashion" },
//   { name: "Adidas Jacket", category: "Fashion" }
// ];

// function filterProducts(query) {
//   return products.filter((a)=>a.category.startsWith(query)||a.name.startsWith(query)).map((a)=>a['name'])
// }

// console.log(filterProducts("Electronics"));  // Output: ["iPhone 13", "MacBook Pro"]
// console.log(filterProducts("Nike"));         // Output: ["Nike Shoes"]