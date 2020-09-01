const bubbleSort = (array) => {
   let range = array.length;

    while(range > 0) {
        for (let i = 0; i < range; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;  
            }  
        }
        range--;
    }

   return array;
};

const array = [2, 6, 3, 1, 10, 1, 5, -1];

// Using swaped var it is possible to reduce the number of iterations (when for example array is already sorted it becomes O(n) )

const bubbleSort = (array) => {
    let range = array.length;
    let swaped = true;

    while(range > 0) {
        swaped = false;
        for (let i = 0; i < range; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp; 
                swaped = true;
            }  
        }
         // If iterated through whole array and not swaped anything its already sorted! 
        if(!swaped) {
            return array;
        }
        // Reduce the range of unsorted elements by one (after each for loop the highest number is bubbled up to the right)
        range--;
    }   
};
