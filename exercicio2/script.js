// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

// a) Crie uma função que recebe os 3 arrays por parâmetro  e imprima a **quantidade de itens** de cada array (utilize o `console.log()` para cada impressão).

// b) Crie outra função que recebe os 3 arrays por parâmetro e  imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

// c) Na mesma função **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve ser um booleano **true** e a segunda deve ser um booleano **false**.

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.
let arrayNum = [10,20,30,40,50]
let arrayString = ['javascript','java','php','c++','c#','css','html']
let arraysAll = [100,'Thiago',true]

function exercicioArrays(a1,a2,a3) {
  a1 = arrayNum.length
  console.log(a1);
  a2 = arrayString.length
  console.log(a2);
  a3 = arraysAll.length
  console.log(a3); 
}
let arrayPrimeriroElem = (a1,a2,a3) => {
  a1 = arrayNum[0]
  console.log(a1);
  a2 = arrayString[0]
  console.log(a2);
  a3 = arraysAll[0]
  console.log(a3);
} 
let arrayConfere = (a1,a3) => {
  a1 = arrayNum.includes(10)
  console.log(a1);
  a3 = arraysAll.includes('Silva')
  console.log(a3);
}
exercicioArrays(arrayNum,arrayString,arraysAll)
arrayPrimeriroElem(arrayNum,arrayString,arraysAll)
arrayConfere(arrayNum,arraysAll)