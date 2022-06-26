function oneThroughTwenty() {
  let meuRetorno = [];
  for(let counter = 1; counter = 20; counter++) {
  meuRetorno.push(counter)
  }
  return meuRetorno;
}

console.log(oneThroughTwenty())

function evensToTwenty() {
  let numerosPares = []
  for(let pares = 0; pares < 20; pares+=2){
    numerosPares.push(pares);
  }
  return numerosPares;
}

console.log(evensToTwenty())

function oddsToTwenty() {
   let numerosImpares = []
   for(let impares = 1; impares < 19; impares++){
    if(impares % 2 == 1){
      numerosImpares.push(impares);
    }
   }
   return numerosImpares;
}

console.log(evensToTwenty())

function multiplesOfFive() {
  let multiplos = []
  for(let i = 5; i < 100; i+=5){
    multiplos.push(i);
  }
  return multiplos;
}

console.log(multiplesOfFive())

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
    
}

//call function squareNumbers

function countingBackwards() {
  let contandoDeTras = []
  for( let deTras = 20; deTras > 1; deTras--){
    contandoDeTras.push(deTras)
  }
  return contandoDeTras
}

console.log(countingBackwards())

function evenNumbersBackwards() {
  let numerosParesTras = []
  for(let paresTras = 20; paresTras > 2; paresTras--){
    if(deTras % 2 == 0){
      numerosParesTras.push(ParesTras)
    }
  }
  return numerosParesTras
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let numerosImparesTras = []
  for(let imparesTras = 19; imparesTras > 1; imparesTras--){
    if(imparesTras % 2 == 1){
      numerosImparesTras.push(imparesTras)
    }
  }
  return numerosImparesTras
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let numerosMultiplosTras = []
  for(let multiplosTras = 100; multiplosTras > 1; multiplosTras-=2){
    numerosMultiplosTras.push(multiplosTras)
  }
  return numerosMultiplosTras
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function squareNumbersBackwards
