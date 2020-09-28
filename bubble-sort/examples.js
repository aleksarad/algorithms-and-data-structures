//simple bubble sort

//this is suboptimal because:
//the whole array is being looped and each value is being compared
//on each iteration, even though the largest value will bubble after one pass
//this way will also compare the last value with undefined, because of the j+1
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};

//optimized bubble sort
const bubbleSort = (arr) => {
    let noSwaps = true;
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
}
//^
//added optimization, check if anything was swapped, if not break
//this is because our loop will keep going through the whole
//array even if there's nothing left to swap