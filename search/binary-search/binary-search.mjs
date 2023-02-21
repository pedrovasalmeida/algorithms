/** Busca binária sem usar recursão
 * @param {*} list Uma lista de elementos ordenada.
 * @param {*} searchedItem O item ä ser pesquisado
 * @returns O índice do elemento encontrado, ou -1 caso contrário.
 */
function binarySearch(list, searchedItem) {
  let leftIndex = 0
  let rightIndex = list.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (searchedItem === list[middleIndex]) return middleIndex

    if (searchedItem < list[middleIndex]) {
      rightIndex = middleIndex - 1
    }

    if (searchedItem > list[middleIndex]) {
      leftIndex = middleIndex + 1
    }
  }

  return -1
}

export default binarySearch