/* 
    OBJETO
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos

*/


// Cria objeto vazio.

const obj = {}

console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos.

const user = {
    email: "isaquetads@email.com.br",
    age: 18,
    name: {
        first_name: "Isaque",
        surname: "Rodrigues",
    },
    adress:{
        street: "Rua x",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123"
    },
    message: function(){
        console.log("OI ISAQUE, Eu sei onde vc moraaaaaaaaaaaa hahahah")
    }
}

// Acessando propriedade e métodos usando a notação de ponto.
console.log(user.email)

// Acessando propriedade de objetos.
console.log(user.name.first_name)

// Executa o métoddo do objeto.
user.message()

// Notação de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()