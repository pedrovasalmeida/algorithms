/** Binary Search without recursion */
function binarySearch(list, searchedItem) {
  let leftIndex = 0
  let rightIndex = list.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    let middleValue = list[middleIndex]

    if (searchedItem === middleValue) return middleIndex

    if (searchedItem < middleValue) {
      rightIndex = middleIndex - 1
    }

    if (searchedItem > middleValue) {
      leftIndex = middleIndex + 1
    }
  }

  return -1
}

export default binarySearch