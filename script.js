function soma(numero1, numero2) {
  return numero1 + numero2;
}

function gerarResultado() {
  event.preventDefault()
  const numero1 = parseInt(document.getElementById("num1").value);
  const numero2 = parseInt(document.getElementById("num2").value);

  const resultado = soma(numero1, numero2);

  const txtResultado = document.getElementById("txtResultado");
  txtResultado.innerHTML = "O resultado da sua soma é: " + resultado;


  return false
}