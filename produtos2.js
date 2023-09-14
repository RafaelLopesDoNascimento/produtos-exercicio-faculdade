const valorProduto = prompt(
  "Informe o valor do produto no mercado estrangeiro para ver seu novo valor com as taxas:" +
    "\n\n" +
    "\nAbaixo de R$ 8,00 é cobrado uma taxa de 50% no seu produto." +
    "\nAcima de R$ 8,00 é cobrado uma taxa de 25% no seu produto." +
    "\nAcima de R$ 11,00 é cobrado uma taxa de 15% no seu produto." +
    "\nAcima de R$ 15,00 é cobrado uma taxa de 5% no seu produto."
);

produto = parseFloat(valorProduto);

const acimaDeQuinze = produto + produto / 20;
const entreOnzeeQuinze = produto + produto / 6.6666;
const entreOitoeDez = produto + produto / 4;
const menorQueOito = produto + produto / 2;

if (valorProduto > 15) {
  alert(
    "Devido ao aumento do valor da moeda estrangeira, seu produto passa a custa:\n" +
      "\nR$ " +
      acimaDeQuinze
  );
} else if (valorProduto >= 11) {
  alert(
    "Devido ao aumento do valor da moeda estrangeira, seu produto passa a custar:\n" +
      "\nR$ " +
      entreOnzeeQuinze
  );
} else if (valorProduto >= 8) {
  alert(
    "Devido ao aumento do valor da moeda estrangeira, seu produto passa a custar:\n" +
      "\nR$ " +
      entreOitoeDez
  );
} else if (valorProduto >= 0.01) {
  alert(
    "Devido ao aumento do valor da moeda estrangeira, seu produto passa a custar:\n" +
      "\nR$ " +
      menorQueOito
  );
} else if (valorProduto == 0) {
  alert("Valor inválido!");
} else if ((valorProduto !== 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)) {
  alert("Escolha números!");
}
