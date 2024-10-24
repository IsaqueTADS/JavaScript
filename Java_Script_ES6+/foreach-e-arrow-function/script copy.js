const imgs = document.querySelectorAll("img");

// console.log(imgs);

imgs.forEach((element, index, array) => {
  // console.log(element);
  // console.log(index);
  // console.log(array);
});

const titulos = document.getElementsByClassName("titulo");

const titulosArray = Array.from(titulos);

titulosArray.forEach((element, index, array) => {
  console.log(array);
  console.log(element.innerHTML);
});
