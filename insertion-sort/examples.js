const insertionSort = (arr) => {
    //start by iterating over every item
    for(let i = 1; i < arr.length; i++) {
        let current = arr[i]
        //this loop moves down the left half of the array
        //or backwards
        //we want the loop to end either when j reaches the beginning of arr
        //or when j is greater than the current, which is our stopping point
        let j;
        for(j = i - 1; j >= 0 && arr[j] > current; j--) {
            //copying value over to the next item as we move through the arr
            arr[j+1] = arr[j]
        } 
        arr[j+1] = current;
    }
    
    return arr
}



let arr = [3, 27, 13, 1, 9]

insertionSort(arr)