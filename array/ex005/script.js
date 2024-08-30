let fruits = ["Apple", "Watermelon", "Strawberry", "Lemon"];
// console.log(fruits)


// Econtra e retorna o índice do elemento no Array.
let position = fruits.indexOf("Lemon");
console.log(position);

//fruits.splice(1,3)
fruits.splice(position,1)
console.log(fruits)
