function quickSort(array, left, right){
    if(array.length === 1) {
        return array;
    }

    const pivot = array[right];
    let rightPointer = right;
    let leftPointer = left;

    if(left < right) {
        while(leftPointer < rightPointer) {

            if(array[leftPointer] > pivot) {
                const temp = array[leftPointer];
                array[leftPointer] = array[rightPointer-1];
                array[rightPointer-1] = pivot;
                array[rightPointer] = temp;
                rightPointer--;
            } else  {
                leftPointer++;
            }   
        }

        // partitionIndex is a index on which leftPointer and rightPointer meet in while loop;
        const partitionIndex = leftPointer; // or rightPointer
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);

    }

    return array;
}