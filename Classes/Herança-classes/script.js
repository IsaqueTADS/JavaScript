class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log("Algum som genérico do animal")
    }
}

// extends => para herdar herança

class Dog extends Animal{
    // não tem nada aqui
    
}
class Cat extends Animal{
    // não tem nada aqui

}

const dog = new Dog("Jake")
console.log(dog.name)
dog.makeNoise()

const cat = new Dog("Migau")
console.log(cat.name)
dog.makeNoise()