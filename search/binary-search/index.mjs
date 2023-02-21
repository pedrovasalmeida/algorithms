/**
 * A busca binária é um algoritmo de busca totalmente otimizado (para listas ordenadas, com custo O Log(N))
 * que utiliza do conceito 'dividir para conquistar' para encontrar o elemento pesquisado.
 * Em outras palavras, a busca binária define um elemento central de todo o vetor e faz uma comparação:
 * - Se o elemento pesquisado for menor do que o elemento central, elimina-se a metade mais à direita (valores maiores)
 * - Se o elemento pesquisado for maior do que o elemento central, elimina-se a metade mais à esquerda (valores menores)
 * Com isso, é possível encontrar o valor desejado com poucos passos. 
 * Sua única limitação exige que a lista esteja ordenada de forma crescente. 
 */

import binarySearch from './binary-search.mjs'
import recursiveBinarySearch from './recursive-binary-search.mjs'

import { inversed, random, repeated, sorted, ARRAY_LENGTH } from '../../mocked_lists.mjs'

function generateRandomValueUntil(maxValue) {
  const min = 1
  const max = Math.floor(maxValue)

  return Math.floor(Math.random() * (max - min) + min)
}

const randomItemToSearch = generateRandomValueUntil(ARRAY_LENGTH)
const selectedList = sorted

/** ----------------------------- */

console.time('Normal Binary Search Time')

const normalBinarySearchItemIndex = binarySearch(selectedList, randomItemToSearch)
console.log({ normalBinarySearchItemIndex })
console.timeEnd('Normal Binary Search Time')

console.log('\n--------------------\n')


/** ----------------------------- */

console.time('Recursive Binary Search Time')

const recursiveBinarySearchItemIndex = recursiveBinarySearch(selectedList, randomItemToSearch)
console.log({ recursiveBinarySearchItemIndex })

console.timeEnd('Recursive Binary Search Time')

console.log('\n--------------------\n')
