function saudar(nome) {
  console.log(`Olá ${nome}`);
}

saudar("Isaque Rodrigues Alves");

const soma = function (a, b) {
  return a + b;
};

console.log(soma(50, 55));

function executar(func,nome) {
  func(nome);
}

executar(saudar,"linguiça calabrosinha");
