/**
 * A busca binária é um algoritmo de busca totalmente otimizado (para listas ordenadas, com custo O Log(N))
 * que utiliza do conceito 'dividir para conquistar' para encontrar o elemento pesquisado.
 * Em outras palavras, a busca binária define um elemento central de todo o vetor e faz uma comparação:
 * - Se o elemento pesquisado for menor do que o elemento central, elimina-se a metade mais à direita (valores maiores)
 * - Se o elemento pesquisado for maior do que o elemento central, elimina-se a metade mais à esquerda (valores menores)
 * Com isso, é possível encontrar o valor desejado com poucos passos. 
 * Sua única limitação exige que a lista esteja ordenada de forma crescente. 
 * 
 * Criado por mim, Pedro Henrique de Vasconcellos Almeida (github @pedrovasalmeida),
 * com o intuito de praticar algoritmos e estrutura de dados.
 */

import binarySearch from './binary-search.js'
import recursiveBinarySearch from './recursive-binary-search.js'

function generateRandomValueUntil(maxValue) {
  const min = 1
  const max = Math.floor(maxValue)

  return Math.floor(Math.random() * (max - min) + min)
}

/** ----------------------------- */
const LIST_SIZE = 10000000
console.log(`Criando lista com ${LIST_SIZE} elementos e gerando um item aleatório...`)

console.time(`Lista com ${LIST_SIZE} elementos criada`)

const randomItemToSearch = generateRandomValueUntil(LIST_SIZE)
const list = Array.from({ length: LIST_SIZE }, (_, i) => i + 1);

console.log(`Lista criada. Devemos buscar pelo item ${randomItemToSearch}.`)

console.timeEnd(`Lista com ${LIST_SIZE} elementos criada`)

console.log('\n--------------------\n')

/** ----------------------------- */

console.time('Normal Binary Search Time')

const normalBinarySearchItemIndex = binarySearch(list, randomItemToSearch)
console.log({ normalBinarySearchItemIndex })
console.timeEnd('Normal Binary Search Time')

console.log('\n--------------------\n')


/** ----------------------------- */

console.time('Recursive Binary Search Time')

const recursiveBinarySearchItemIndex = recursiveBinarySearch(list, randomItemToSearch)
console.log({ recursiveBinarySearchItemIndex })

console.timeEnd('Recursive Binary Search Time')

console.log('\n--------------------\n')
