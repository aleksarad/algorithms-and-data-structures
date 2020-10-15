(will return to format later)

Bubble Sort:
* Moving largest values to the end until sorted
* two loops
* outer loop, loops down the array
* inner loop, loops up, as long as it’s < outer - 1
* compare inner loop to inner loop val + 1
* if greater, swap.

Selection Sort: 
* setting a min value and moving smallest to left
* outer loop, i 
* set a minimum, equal to i 
* user inner loop to compare to current min
* if arr[inner] < arr[min]
* then inner becomes new min
* after inner loop done, if min is no longer equal to i,  swap arr[i] and arr[min]

Insertion Sort:
* builds up sorted left portion of array, inserting one item at a time into sorted condition
* start with outer loop
* create current variable, that begins as arr[outer]
* inner loop that starts at inner - 1; as long as its >= 0 && arr[j] greater than current ( we want the inner loop to exit whenever it’s greater than current ). Inner loop—
* insider inner loop, we copy over values to the next item as we traverse arr: arr[inner+1] = arr[inner]
*outside inner loop, arr[j+1] = current;

Merge Sort
* exploits the fact that arrays with 0 or 1 elements are already sorted
* deconstructs an array into 0 or 1 item arrays, them merges
* basecase -> arr.length <= 1, return arr
* find middle point, Math.floor(arr.length/2)
* run mergeSort on left and right
* return merge(left, right)

Merging 2 arrays algorithm:
* new empty arr
* initialize i & j to 0
* 3 loops, not nested
* loop 1 -> while i < arr1.length && j<arr2.length
	*if arr[i] < arr2[j], push arr[i] into new arr and i++
	* else (meaning arr[j] is smaller), push arr[j] and increment j
* loop 2 -> while (i < arr1.length, newArr.push(arr1[I]), I++
* loop 3, same as above with J 

Quick Sort
* also exploits that arrays of 0 or 1 are always sorted, but relies on a variable called the pivot
* accepts arr, left = 0, right = arr.length - 1
* if left < right {
	let pivotIndex = pivot(arr, left, right)
	quickSort(arr, left, pivotIndex - 1)
	quickSort(arr, pivotIndex + 1, right
}


Pivot:
* given an array, it designates a pivot, and rearranges elements in that array so that values less than the pivot are moved the left, and greater than move to the right. Returns index of pivot.
* accepts arr, start = 0, arr length - 1
* set pivotIndex = start ? Optional?
* set indexCounter = start
* loop through arr, let a = start + 1
* if arr[pivotIndex] > arr[a], indexCounter++ swap arr[a] and arr[indexcounter]
* after loop, swap arr[start] with arr[indexCounter]
* return index


Radix Sort
* exploits digit size
* works on numbers only
* 3 helpers
* mostDigits - takes an array and returns the max amount of digits of one element 
* digitCount - given a number, returns amount of digits
* getDigit - returns the place of a digit in a number
* Radix:
* let maxDigitCount= mostDigits(arr)
* outer loop that loops maxDigitCount amount of times
* let digitBuckets = Array.from({length : 10}, () => [])
* inner loop
* let digit = getDigit(arr[i],k)
* digitBuckets[digit].push(arr[I])
* outside inner loop arr = [].concat(…digitBuckets)
* return arr