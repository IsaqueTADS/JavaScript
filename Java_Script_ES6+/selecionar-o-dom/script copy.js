const sections = window.document.getElementsByTagName("section");

console.log(sections[0]);

var tituloMod = document.querySelectorAll(".titulo");

console.log(tituloMod[0].innerHTML);

tituloMod[0].innerHTML = "caguei kkkkk";

var corpo = document.querySelector("body");

corpo.style.backgroundColor = "#111";

const linksInternos = document.querySelector('[href^="#"]');

console.log(linksInternos.href);

const listaImgs = document.querySelectorAll(".animais-lista img");

console.log(listaImgs[0]);

var primeiraul = document.querySelector("ul");
console.log(primeiraul.innerHTML);

const nodeList = document.querySelectorAll(".grid-section");
const htmlList = document.getElementsByClassName("grid-section");

primeiraul.classList.add("grid-section");

console.log(nodeList);
console.log(htmlList);

/* Array like : HTMLCollection e NodeList sõa array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList */

nodeList.forEach((gridItem, index, array) => {
  gridItem.classList.add("azul");
  console.log(index);
  console.log(gridItem);
});

//tranformando arrayy like em array
const arrayGrid = Array.from(htmlList);

console.log(arrayGrid);

arrayGrid.forEach((item) => {
  console.log(item);
});

