function oneThroughTwenty() {
  let meuRetorno = [];
  for(let counter = 1; counter <= 20; counter++) {
  meuRetorno.push(counter)
  }
  return meuRetorno;
}

console.log(oneThroughTwenty())

function evensToTwenty() {
  let numerosPares = []
  for(let pares = 0; pares <= 20; pares+=2){
    numerosPares.push(pares);
  }
  return numerosPares;
}

console.log(evensToTwenty())

function oddsToTwenty() {
   let numerosImpares = []
   for(let impares = 1; impares <= 19; impares++){
    if(impares % 2 == 1){
      numerosImpares.push(impares);
    }
   }
   return numerosImpares;
}

console.log(oddsToTwenty())

function multiplesOfFive() {
  let multiplos = []
  for(let i = 5; i <= 100; i+=5){
    multiplos.push(i);
  }
  return multiplos;
}

console.log(multiplesOfFive())

function squareNumbers() {
  let numeroQuadrado = []
  for(let numQuadrado = 1; numQuadrado*numQuadrado <= 100; numQuadrado+=1){
    numeroQuadrado.push(numQuadrado*numQuadrado)
  }
  return numeroQuadrado
}

console.log(squareNumbers())

function countingBackwards() {
  let contandoDeTras = []
  for( let deTras = 20; deTras >= 1; deTras--){
    contandoDeTras.push(deTras)
  }
  return contandoDeTras
}

console.log(countingBackwards())

function evenNumbersBackwards() {
  let numerosParesTras = []
  for(let paresTras = 20; paresTras >= 2; paresTras--){
    if(paresTras % 2 == 0){
      numerosParesTras.push(paresTras)
    }
  }
  return numerosParesTras
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let numerosImparesTras = []
  for(let imparesTras = 19; imparesTras >= 1; imparesTras--){
    if(imparesTras % 2 == 1){
      numerosImparesTras.push(imparesTras)
    }
  }
  return numerosImparesTras
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let numerosMultiplosTras = []
  for(let multiplosTras = 100; multiplosTras >= 1; multiplosTras-=5){
    numerosMultiplosTras.push(multiplosTras)
  }
  return numerosMultiplosTras
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let numQuadradoTras = []
  for(let numberQuadrado = 100; numberQuadrado*numberQuadrado >= 1; numberQuadrado -=1){
    if(numberQuadrado*numberQuadrado <= 100){
      numQuadradoTras.push(numberQuadrado*numberQuadrado)
    }
  }
  return numQuadradoTras
}

console.log(squareNumbersBackwards())
