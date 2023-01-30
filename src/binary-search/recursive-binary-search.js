/**
 * 
 * @param {*} list - Uma lista de elementos ordenada
 * @param {*} searchedItem - O item à ser procurado
 * @param leftIndex - NÃO OBRIGATÓRIO - O indicador de início das buscas no array
 * @param rightIndex  - NÃO OBRIGATÓRIO - O indicador de fim das buscas no array
 * @returns O índice do elemento encontrado, ou -1 caso contrário.
 */
function recursiveBinarySearch(
  list,
  searchedItem,
  leftIndex = 0,
  rightIndex = list.length - 1
) {
  if (leftIndex > rightIndex)
    return -1

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  const middleValue = list[middleIndex]

  if (searchedItem === middleValue) return middleIndex

  if (searchedItem < middleValue) {
    const newRightIndex = middleIndex - 1
    return recursiveBinarySearch(list, searchedItem, leftIndex, newRightIndex)
  }

  if (searchedItem > middleValue) {
    const newLeftIndex = middleIndex + 1
    return recursiveBinarySearch(list, searchedItem, newLeftIndex, rightIndex)
  }
}

export default recursiveBinarySearch