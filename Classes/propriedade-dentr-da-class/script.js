class Prodcut {
  constructor(name, id, amount, price) {
    this.name = name;
    this.id = id;
    this.amount = amount;
    this.price = price;
  }
}

const product1 = new Prodcut("Celular", "1", "30", "2500");

const product2 = new Prodcut("Pc Gamer", "2", "10", "3500");

console.log(product1);
console.log(product2);
