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
