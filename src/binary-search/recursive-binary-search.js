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

  if (middleValue === searchedItem)
    return middleIndex

  if (middleValue > searchedItem) {
    const newRightIndex = middleIndex - 1
    return recursiveBinarySearch(list, searchedItem, leftIndex, newRightIndex)
  }

  if (middleValue < searchedItem) {
    const newLeftIndex = middleIndex + 1
    return recursiveBinarySearch(list, searchedItem, newLeftIndex, rightIndex)
  }
}

export default recursiveBinarySearch