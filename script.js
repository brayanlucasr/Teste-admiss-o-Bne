function calcular() {
  let altura = document.getElementById("altura").value;
  let andar = document.getElementById("andares").value;

  if (altura === "" || andar === "") {
    document.getElementById("resultado").innerHTML =
      "Confira se preencheu os campos e tente novamente.";
  } else {
    let resultado = altura * andar;
    document.getElementById(
      "resultado"
    ).innerHTML = `O edificio tem ${resultado} metros de altura.`;
  }
}

function verificar() {
  let primeiro = document.getElementById("primeiroValor").value;
  let segundo = document.getElementById("segundoValor").value;
  let terceiro = document.getElementById("terceiroValor").value;
  let quarto = document.getElementById("quartoValor").value;

  if (primeiro === "" || segundo === "" || terceiro === "" || quarto === "") {
    document.getElementById("resultado2").innerHTML =
      "Confira se inseriu os quatro valores e tente novamente.";
  } else {
    let max = Math.max(primeiro, segundo, terceiro, quarto);
    let min = Math.min(primeiro, segundo, terceiro, quarto);
    let media = (min + max) / 2;
    document.getElementById(
      "resultado2"
    ).innerHTML = `O maior número é o ${max},<br> o menor é o ${min} e <br> a média deles é ${media}.`;
  }
}

function valoresArray() {
  let n = [1, 3, 35, 40, 85, 123, 121, 209, 200, 305, 350];
  let pares = [];
  let impares = [];
  for (let i = 0; i < n.length; i++) {
    /*console.log(n[i]);
    /*Para acessar uma posição especifica do meu array (n[1])*/
    if (n[i] % 2 === 0) {
      pares.push(n[i]);
    }
    if (n[i] % 2 !== 0) {
      impares.push(n[i]);
    }
  }
  // console.log(pares);
  document.getElementById(
    "resultado3"
  ).innerHTML = `Os pares são: ${pares}. <br> Os impares são: ${impares}.`;
}
// dois arrays, esses arrays tem que ser alimentados apenas por pares e outro impares
// para alimentar um array eu utilizo push.
// console.log trazendo o array par e o impar

function exibirNumeros() {
  let nmr1 = [];
  let nmr2 = [];
  let nmr3 = [];
  let nmr4 = [];
  nmr1.push(document.getElementById("nmr1").value);
  nmr2.push(document.getElementById("nmr2").value);
  nmr3.push(document.getElementById("nmr3").value);
  nmr4.push(document.getElementById("nmr4").value);
  let numero = [];
  numero.push(nmr1, nmr2, nmr3, nmr4);
  if (nmr1 == 0 || nmr2 == 0 || nmr3 == 0 || nmr4 == 0) {
    document.getElementById("resultado4").innerHTML =
      "Por favor, complete todos os campos.";
  } else {
    numero.sort(function (a, b) {
      return b - a;
    });
    document.getElementById(
      "resultado4"
    ).innerHTML = `Os números em ordem decrescente são: ${numero}.`;
  }

  //https://ricardo-reis.medium.com/o-método-sort-do-array-javascript-482576734e0a
}

function vogais() {
  let texto = document.getElementById("inputVogais").value;
  let count = 0;
  let vogais = /[aeiou]/i;
  //https://codigofonte.org/contagem-de-vogais-algoritmo-js/

  if (texto === "") {
    document.getElementById("resultado5").innerHTML =
      "Digite um trecho no campo acima para continuar.";
  } else {
    for (let i = 0; i < texto.length; i++) {
      if (texto[i].match(vogais)) {
        count++;
        document.getElementById(
          "resultado5"
        ).innerHTML = `No trecho acima há: ${count} vogais.`;
      }
    }
  }
}
