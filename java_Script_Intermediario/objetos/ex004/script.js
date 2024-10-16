/*
    OPTIONAL CHAINING (?.)  - encadeamento opcional
    Se a propriedade ou função chamada é nullish 
    ( null or undefined ), a expressão retorna 
     undefined em vez de gerar um erro .

    Útil ao explorar o conteúdo de um objeto quando
    não existe garantia da existência de
    determinadas propriedades obrigatórias

*/

const user = {
  id: 1,
  name: "Isaque",
  
    address: {
        street: "Meio do mato",
        city: "Zona Rural",
        geo: {
            latitude: 47.8908,
            longitude: 17.3456,
        },
    },
  message: function () {
    console.log(`Olá conterraneo ${this.name}`);
  },
};

console.log(user?.address?.streeet);
user.message?.();
