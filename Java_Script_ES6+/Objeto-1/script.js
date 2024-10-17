var user = {
  name: "Isaque",
  surName: "Rodrigues",
  fullName() {
    return `${this.name} ${this.surName}`;
  },
};

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi R8",
};

carro.preco = 784000;

var cachorro = {
  raca: "labarador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "gadooo";
    }
  },
};

