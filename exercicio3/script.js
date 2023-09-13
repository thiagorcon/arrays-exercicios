// # Exercício 3

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Crie uma função que recebe o primeiro array como parâmetro e adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para imprimir o original e a cópia.

// b) Crie uma função que recebe o segundo array por parâmetro e remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

// c) Crie uma função que recebe por parâmetro o terceiro array e remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.
let arrayNumOriginal = [10,20,30,40,50]
let arrayNumCopia = arrayNumOriginal.slice()
let arrayString = ['javascript','java','php','c++','c#','css','html']
let arraysAll = [100,'Thiago',true]
arrayNumCopia.push(1000)
//console.log(arrayNumOriginal);
//console.log(arrayNumCopia); 
function exerA(a1) {
  let primeiroNumero = a1
  primeiroNumero.unshift(5000)
  console.log(primeiroNumero);
}
console.log(exerA(arrayNumCopia))
function exerB(b2) {
  let ultimoDado = b2
  ultimoDado.pop()
  console.log(ultimoDado);
}
console.log(exerB(arrayString));

function exerC(c3) {
  let segundoDado = c3
  segundoDado.splice(1,1)
  console.log(segundoDado);
}
console.log(exerC(arraysAll));



