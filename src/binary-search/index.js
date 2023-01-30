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
