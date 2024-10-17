function obterDados(callback) {
  setTimeout(() => {
    const dados = {
      nome: "Isaque",
      sobrenome: "Rodrigues",
      idade: 18,
    };
    callback(null, dados);
  }, 2000);
}

function exibirDados(erro, dados) {
  if (erro) {
    console.error("Erro: ", erro);
  } else {
    console.log(dados);
  }
}

obterDados(exibirDados);
