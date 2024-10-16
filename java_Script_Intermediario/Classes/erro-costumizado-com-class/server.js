class MyCustumError {
  constructor(message) {
    this.message = "CLASSE DE ERRO PADRÃO " + message;
  }
}

try {
  // throw new Error("Erro generico")
  throw new MyCustumError("Erroe personalizadi lançado");
} catch (error) {
  if (error instanceof MyCustumError) {
    console.log(error.message);
  } else {
    console.log("Não foi possível executar!");
  }
}
