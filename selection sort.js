const selectionSort = (array) => {
    const length = array.length;
    let start = 0;
    
    while (start < length) {
        let indexOfSmallest = start;
        for (i = start; i < length; i++) {
            if (array[i+1] < array[indexOfSmallest]) {
                indexOfSmallest = i+1
            }
        }
        
        temp = array[start];
        array[start] = array[indexOfSmallest];
        array[indexOfSmallest] = temp;
        start++;
    }

    return array;
};

selectionSort([4,11,23,1,0,5, 555, -1, 2233, -102832]);