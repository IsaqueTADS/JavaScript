//REtornando todas imagens do site
const todasIMGS = document.querySelectorAll("img");

console.log(todasIMGS);

//Retornando cimagens que comce com imagem
const imagensImagens = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensImagens);

const links = document.querySelectorAll('[href^= "#"]');

console.log(links[0].href);

// selecionar primeiro h2

const oneH2 = document.querySelector(".animais-descricao h2");

console.log(oneH2.innerHTML);

// selecionar o ultimo p do site

const paragafos = document.querySelectorAll("p");
var indexp = paragafos.length;
console.log(indexp);
console.log(paragafos[indexp - 1].innerHTML);
console.log(paragafos[paragafos.length - 1]);
console.log(paragafos[--paragafos.length]);
