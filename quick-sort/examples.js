const pivot = (arr, start = 0, end = arr.length+1) => {
    let pivotIndex = start;
    let indexCounter = start
    for(let i = start + 1; i < arr.length; i++) {
        if(arr[pivotIndex] > arr[i]) {
            indexCounter++;
            let temp = arr[i];
            arr[i] = arr[indexCounter];
            arr[indexCounter] = temp;
        }
    }
    let tmp = arr[start];
    arr[start] = arr[indexCounter];
    arr[indexCounter] = tmp

    return indexCounter;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}