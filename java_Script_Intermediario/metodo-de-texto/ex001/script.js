let message = "Estou estudando os fundamentos do Javascript."
/*
console.log(message)

// Exibir o texto em maiúsculo.
console.log(message.toUpperCase())

// Exibir o texto em minuculo
console.log(message.toLowerCase())

//comprimento de uma string
console.log(message.length)

let password = "123456"

if (password.length < 6){
    console.log("A senha deve ter pelo menos 6 caracteres")
}

// Quantos digitos tem um número
let value = 12345
console.log(String(value).length)
console.log(value.toString().length)

// Subistituindo parte de um texto.

console.log(message.replace("Javascript","HTML"))
console.log(message)
*/
// Extraindo uma parte da string (start, end)
console.log(message.slice(6,30))

// Extraindo uma parte da string de trás para frente

console.log(message.slice(-11))

let textWithSpace = "     Texto de exemplo      "
console.log(textWithSpace.length)

// Remove os espaços em branco no início e no final da string.
console.log(textWithSpace.trim().length)