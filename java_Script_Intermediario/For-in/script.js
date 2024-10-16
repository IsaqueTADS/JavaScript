// for...in executa interações a partir de um onjeto e percorre as propriedades.

let person = {
    name: "Isaque",
    surname: "Rodrigues",
    email: "isaque@seguro.com",
}

for (let escolha in person){
    // Exibe o nome da propriedade
    console.log(escolha)

    // Exibe o conteúdo da propriedade
    console.log(person[escolha])

}

let students = ["Isaque","Hugo","Lucas"]

for (let index in students ){
    //console.log(index)
    console.log(students[index])
}