// Mostrar no console cada paragrafo do site
const paragrafo = document.querySelectorAll("p");

console.log(paragrafo);

const paragrafoArray = Array.from(paragrafo);

paragrafoArray.forEach((element) => console.log(element));

console.log(paragrafoArray);

paragrafoArray.forEach((element) => console.log(element.innerText));
