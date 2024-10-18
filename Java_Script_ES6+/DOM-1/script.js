const varaSeca = window.document.location.href;

console.log(varaSeca);

if (varaSeca === "http://127.0.0.1:5500/DOM-1/index.html") {
  console.log("Eita preulaa");
}

const h1t = document.querySelector("h1");

function geraMessagem(callback) {
  setTimeout(() => {
    const obj = {
      text: "Te amo Deus, graças ao senhor eu posso dizer que não sou burro, apenas preciso aprender a ser sabio, com racionalidade etender e ver que não sei de tudo, e com paciencia etender como a progamação funciona, e assim não ficar pertubado com tantas coisas, desonrrando seu nome dessa forma, alias tudo que fazemos tem que ser pelo senhor, assim como o apostolo paulo fala em 1 Corintios 10:31 Assim, quer vocês comam, quer bebam, quer façam qualquer outra coisa, façam tudo para a glória de Deus. Que eu possa ser uma pessoa menos anciosa Deus, e entregar em tuas mãos o meu futuro, e compartilhar apenas contigo as minhas dores, e que eu saiba senho que apenas o senhor pode me ajudar a me tornar um mestre, porem que eu seja seu eterno servo, e aprendiz, amem.",
    };
    callback(obj.text);
  }, 2000);
}

function exibirMessagem(text) {
  console.log(text);
}

function clicar() {
  geraMessagem(exibirMessagem);
}

const botao = document.querySelector("h1");
botao.classList
botao.addEventListener("click", () =>{
  console.log("cliquei em", botao.innerText)
});
