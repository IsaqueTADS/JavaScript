let obj = [17];
let index = 300;

try {
  //obj.excute();

  if (!obj.includes(17)) {
    throw new Error("O número 17 não está disponivel.");
  }

  if (index > 99) {
    throw new Error("O número 17 bão está disponive");
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Método indisponivel");
  } else if (error instanceof RangeError) {
    console.log(error.message);
  } else {
    console.log("Não foi possivel realizar a ação");
  }
  //console.log(error);
}
