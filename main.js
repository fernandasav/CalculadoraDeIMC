const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const mesage = `Seu IMC é ${imc} ${nivelImc}.`;

  setResultado(mesage, true);
});

function getNivelImc(imc) {
  const nivel = [
    "é menor do que 18,5 (abaixo do peso)",
    "é entre 18,5 e 24,9 (peso normal)",
    "é entre 25 e 29,9 (sobrepeso)",
    "é entre 30 e 34,9 (obesidade grau 1)",
    "é entre 35 e 39,9 (obesidade grau 2)",
    "é acima de 40 (obesidade grau 3)",
  ];

  if ((imc <= 18.5)) {
    return nivel[0];
  } else if ((imc > 18.5 && imc < 24.9)) {
    return nivel[1];
  } else if ((imc > 25 && imc < 29.9)) {
    return nivel[2];
  } else if ((imc > 30 && imc < 34.9)) {
    return nivel[3];
  } else if ((imc > 35 && imc < 39.9)) {
    return nivel[4];
  } else {
    return nivel[5];
  }
}

function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(mesage, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = mesage;
  resultado.appendChild(p);
}
