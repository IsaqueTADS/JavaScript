function areaQuadrado(lado, callBack) {
  var res1 = lado * lado;
  callBack(res1);
}

function faleResultado(res1) {
  console.log(`oi o resultado passado por callBack é ${res1}`);
}

areaQuadrado(5, faleResultado);

addEventListener("click", function () {
  console.log("JESUS ME GUIA ATRAVAES DE UM MUDO OBSCURO");
});
