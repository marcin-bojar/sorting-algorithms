function insertionSort(array) {
  const length = array.length;
  let temp;

    for (let i = 1; i < length; i++) {
        let k = i;
        while (array[k] < array[k-1] && k > 0) {
            temp = array[k];
            array[k] = array[k-1];
            array[k-1] = temp;
            k--;
         }
    }
  
  return array;
}