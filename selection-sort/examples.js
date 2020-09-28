const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        //using this second loop to compare to current min
        //j = i + 1 bc we are comparing i to the value next to it and so on
        //if we come across a smaller num, it becomes the new min
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        console.log(arr[min], arr[i])
        
        //if we have a new min, we swap them in the array
        //this continues until the array is sorted and the
        //num at j is never < num at i
        if(min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        console.log('end of loop', arr[min], arr)
    }
    return arr
}

const arr = [23, 28, 88, 27, 99, 1, 3]
selectionSort(arr)
