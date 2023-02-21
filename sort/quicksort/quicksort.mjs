export function quickSort(list) {
  if (list.length < 2) return list;

  const pivot = list[0];
  const smallestElements = []
  const biggestElements = []

  for (let i = 1; i < list.length; i++) {
    const currentElement = list[i];

    if (currentElement < pivot) {
      smallestElements.push(currentElement)
    }

    if (currentElement >= pivot) {
      biggestElements.push(currentElement)
    }
  }

  return quickSort(smallestElements).concat(pivot, quickSort(biggestElements))
}

export function quickSortWithJsFilter(list) {
  if (list.length < 2) return list;

  const pivot = list[0];
  const smallest = list.filter(element => element < pivot)
  const equal = list.filter(element => element === pivot)
  const biggest = list.filter(element => element > pivot)

  return quickSortWithJsFilter(smallest).concat(equal).concat(quickSortWithJsFilter(biggest));
}

export default quickSort