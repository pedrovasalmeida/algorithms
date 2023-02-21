/**
 * O algoritmo de ordenação QuickSort utiliza da estratégia "dividir para conquistar" para ordenar seus elementos.
 * Não é um algoritmo complexo, sendo a sua forma recursiva a mais simples de entender, na minha visão.
 * Seguimos alguns poucos passos para utilizar o quicksort:
 *  1. Escolhe-se um elemento pivô (o primeiro elemento da lista, posição 0)
 *  2. Percorre todos os elementos da lista, onde:
 *    2.1 Salva-se os elementos menores que o pivô num array
 *    2.2 Salva-se os elementos iguais ou maiores que o pivô em outro array
 *  3. Retorna-se a função quickSort:
 *    3.1 Chama-se a função quickSort recursivamente passando os elementos menores que o pivô como parâmetro
 *    3.2 Concatena-se o pivô à esse retorno
 *    3.3 Concatena-se a função quickSort passando os elementos maiores que o pivô como parâmetro
 */

import { quickSort, quickSortWithJsFilter } from './quicksort.mjs'
import { random, inversed, repeated, sorted } from '../../mocked_lists.mjs'

// ------------------------------------------------------------

const selectedList = random;

console.time('quicksort classic')
const classicQuicksort = quickSort(selectedList)
console.timeEnd('quicksort classic')

console.log('Sorted: ', classicQuicksort)

// -----------------------

console.time('quickSortWithJsFilter')
const testedQuickSort = quickSortWithJsFilter(selectedList)
console.timeEnd('quickSortWithJsFilter')

console.log('Sorted: ', testedQuickSort)