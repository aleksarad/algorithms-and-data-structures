* our prior sorts (selection, bubble, insertion) don't scale well, the more values they need to sort the longer they take
* time complexity improves from O(n^2) O(n log n)

# Merge Sort #
* big O is consistently O(n log n) time complexity
* exploits the fact that arrays with 0 or 1 elements are already sorted
* works by deconstructing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
* then merge those arrays
* pseudocode:
    * break array into halves until arrays are empty or have one element - recursively
    * base case: arr.length <= 1
    * merge the arrays

## Merging Arrays ##
* Given 2 sorted arrays
    * create empty array, take a look at smallest values in each arr
    * if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on the next value in the first array
    * if the value in the first array is larger than than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
```javascript
    const merge = (arr1, arr2) => {
    let newArr = []
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
            if(arr1[i] < arr2[j]) {
                newArr.push(arr1[i])
                i++;
            } else {
                newArr.push(arr2[j])
                j++;
            }
    }
    while(i < arr1.length) {
        newArr.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }
    return newArr;
}
```