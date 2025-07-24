function calcular(operacion) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let resultado;

  switch (operacion) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num2 !== 0 ? num1 / num2 : "Error: división por 0";
      break;
    case '^':
      resultado = Math.pow(num1, num2);
      break;
    case '√':
      resultado = `√${num1} = ${Math.sqrt(num1).toFixed(2)}, √${num2} = ${Math.sqrt(num2).toFixed(2)}`;
      break;
    default:
      resultado = "Operación no válida";
  }

  document.getElementById('resultado').innerText = "Resultado: " + resultado;
}