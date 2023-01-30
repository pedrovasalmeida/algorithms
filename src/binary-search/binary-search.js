/** Busca binária sem usar recursão
 * @param {*} list Uma lista de elementos ordenada.
 * @param {*} searchedItem O item ä ser pesquisado
 * @returns O índice do elemento encontrado, ou -1 caso contrário.
 */
function binarySearch(list, searchedItem) {
  /** Declaramentos indicadores iniciais para nos localizarmos na busca 
   * leftIndex representa o indicador inicial do array
   * rightIndex representa o indicador final do array
   * [ inicial | | | | centro | | | | | final ]
  */
  let leftIndex = 0
  let rightIndex = list.length - 1

  /** Enquanto o indicador inicial não for superior ou igual ao indicador final, rodamos esse loop 
   * Em outras palavras, enquanto os indicadores não se encontrarem
  */
  while (leftIndex <= rightIndex) {
    /** Salvamos as informações do índice e o valor do elemento mais ao centro de todo o array */
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    let middleValue = list[middleIndex]

    /** Se o item pesquisado for igual ao elemento central, já podemos retorná-lo */
    if (searchedItem === middleValue) return middleIndex

    /** Se o item pesquisado for menor que o valor central, movemos o indicador final para o centro do vetor
     * Ou seja, eliminamos a metade mais à direita do centro do array (valores maiores)
     */
    if (searchedItem < middleValue) {
      rightIndex = middleIndex - 1
    }

    /** Se o item pesquisado for maior do que o valor central, movemos o indicador inicial para o centro do vetor
     * Ou seja, eliminamos a metade mais á esquerda do centro do array (valores menores)
     */
    if (searchedItem > middleValue) {
      leftIndex = middleIndex + 1
    }
  }

  /** Caso não haja nenhuma ocorrência do valor pesquisado, o índice -1 é retornado */
  return -1
}

export default binarySearch