function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  
  //define middle of the array
  const middle = Math.floor(array.length / 2);
  
  //divide the array into two halves
  const left = array.splice(0, middle);
  const right = array;

  //use recursion to get to the point when left and right side are 1-element arrays
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    let merged = [];

    //using splice makes the array smaller after each iteration
    while(left.length) {

        //if element in the right side is smaller push it into result's array
        if (right[0] < left[0]) {
            merged.push(right.splice(0, 1)[0])   
        } else {
        // if element in the left side is smaller or equal push it into result's array and go to next iteration of the loop
        merged.push(left.splice(0, 1)[0]);    
        }

    }

    //add the leftovers from the right side to the result's array (can be more than 1 element therefore using concat)
    if(right.length > left.length) {
        merged = merged.concat(right)
    } 

    return merged;

}