function areaQuadrado(lado, callBack) {
  var res1 = lado * lado;
  callBack(res1);
}

function faleResultado(res1) {
  console.log(`oi o resultado passado por callBack é ${res1}`);
}

console.log(areaQuadrado(5, faleResultado));
// addEventListener("click", function () {
//   console.log("JESUS ME GUIA ATRAVAES DE UM MUDO OBSCURO");
// });

var res2 = faleResultado();

console.log(`o retorno sem retunr será ${res2}`);

function verifiIdade(idade) {
  console.log(idade);
  if (typeof idade !== "number") {
    return "informe a idade corretamente! ";
  } else if (idade >= 60) {
    console.log("é vey sor, idosão");
    return true;
  } else {
    console.log("é novao ainda");
    return false;
  }
}

let res3 = verifiIdade(500);
console.log(res3);
