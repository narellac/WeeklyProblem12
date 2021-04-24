const texto = (texto) => {
  return texto
}

const suma = (sumandoA, sumandoB) => {
  return sumandoA + sumandoB;
}

const resta = (minuendo, sustraendo) => {
  return minuendo - sustraendo;
}

const multiplicacion = (factorA, factorB) => {
  return factorA * factorB;
}

const division = (dividendo, divisor) => {
  if  ( divisor === 0)  {
    return 'No se puede dividir por 0';
  } else  {
    return dividendo / divisor;
  }
}

const tablaMultiplicar = (multiplicando, multiplicador) => {
  if (multiplicador === undefined) multiplicador = 10;
  let table = []
  for (let i = 0; i <= multiplicador; i++){
    table.push(multiplicando * i)
  }
  return table
}

const potencia = (base, exponente) => {
  return Math.pow(base, exponente)
}

const anidada = (a,b) => {
  function cuadrado(x) {
     return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}

const cerosIzq = (num, totalLength) => {
  var numStr = num.toString();
  var numCeros = totalLength - numStr.length;
  for (var i = 1; i <= numCeros; i++) {
    numStr = "0" + numStr;
}
  return numStr;
}


export {
  texto,
  suma,
  resta,
  multiplicacion,
  division,
  tablaMultiplicar,
  potencia,
  anidada,
  cerosIzq,
}