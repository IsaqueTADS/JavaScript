class Animal {
  constructor(name) {
    this.name = name;
  }

  // make = fazer // noise = barulho
  makeNoise() {
    console.log("Algum som genérico do animal");
  }
}

// extends => para herdar herança

class Dog extends Animal {
  makeNoise() {
    console.log("Latidos de cachorros uuuuuuuuuu");
  }
}
class Cat extends Animal {
  makeNoise() {
    console.log("Miados de gatos no telhado buuuuu");
  }

  run() {
    console.log("correndo...");
  }
}

const dog = new Dog("Jake");
console.log(dog.name);
dog.makeNoise();

const cat = new Cat("Migau");
console.log(cat.name);
dog.makeNoise();
cat.run();
