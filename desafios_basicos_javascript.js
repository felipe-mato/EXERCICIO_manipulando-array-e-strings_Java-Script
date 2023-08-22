/*
1-) Encontre a letra
A função deve receber dois parametros, uma string e uma letra-alvo
> Retornar false caso a string não contenha aletra passada por parametro.
> Retornar true e a posição da letra na palavra caso contenha
*/

function containLetter(string, target) {
  const array = string.split('')
  for (i = 0; i < array.length; i ++) {
    if (array[i] === target) {
      return `Letra ${target} encontrada na posição ${i+1}, ${true}`
    }
  }
  return false
}
console.log(containLetter('exemplo', 'm'))

/*
2-) Imprima o nome ao contrário
A função deve receber uma string como parametro
> Retornar a setring invertida, de trás para frente
> Exemplo: 'ABCDEF' = 'FEDCBA', 'Felipe' = 'epileF'
*/

function reverseString(string) {
  const array = string.split('')
  return (array.reverse().join(''))
}
console.log(reverseString('Exemplo'))

/*
3-) Rotacione o array
A função deve receber dois parametros, um array e um valor inteiro
> A função deve rotacionar o array trocando cada elemento para a esquerda
> A quantidade de vezes que o array será rotacionado deve ser definida
pelo numero recebido no segundo parametro
> Retornar o array modificado
> Exemplo: entrada = [1, 2, 3, 4, 5], 2 saída: [3, 4, 5, 1, 2]
*/

function rotateLeft(array, int) {
  for (i = 0; i < int; i++) {
    array.push(array[0])
    array.shift()
  }
  return array
}
let array = [1, 2, 3, 4 ,5]
console.log(rotateLeft(array, 1))


// Glossário

// SPLIT
// Divide uma string em partes menores com base em um separador
let string = 'minha string' 
splitString = string.split('')
console.log('aqui', splitString);

//JOIN
// Une os elementos de uma string
string = ['s', 't', 'r', 'i', 'n', 'g']
joinString = string.join('')
console.log(joinString);

// REVERSE
// Inverte um array
array = [1, 2, 3, 4, 5]
const reversedArray = array.reverse()
console.log(reversedArray);




// PUSH
// Adiciona elemento ao final do array
array = [1, 2, 3, 4 ,5]
array.push(6)
console.log(array);

//POP
// Remove ultimo elemento do array
array = [1, 2, 3, 4 ,5]
array.pop()
console.log(array);

// UNSHIFT
// Insere novo elemento no começo do array
array = [1, 2, 3, 4 ,5]
array.unshift(0)
console.log(array);

// SHIFT
// Remove primeiro lemento do array
array = [1, 2, 3, 4 ,5]
array.shift()
console.log(array);