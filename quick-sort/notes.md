# Quick Sort #

* big O time complexity: o(n^2)
* space complexity: o(log n)
* also exploits the fact that arrays of 0 or 1 are always sorted
* selects 1 element, called the pivot, and finds the index where the pivot should end up in the sorted array
* pivot helper:
    * given an array it designates a pivot and then rearranges elements in the array so that values less than the pivot are moved to the left of the pivot, and values greater than the pivot are moved to the right.
    * should not create a new array!
    * when done, should return index of the pivot.
    * picking a pivot:
        * ideally, the median value
        * can also be first and last or random
* pivot pseudocode:
    * accepts 3 args: an array, start index, end index (these can default to 0, and arr length -1)
    * set pivot to start of array
    * store the current pivot index in a variable
    * loop through the array, if the pivot is greater than the current element, increment the pivot index variable and swap the current element with the element at the pivot index.
    * swap the starting element with the pivot index
    * return pivot index
```javascript
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
```
