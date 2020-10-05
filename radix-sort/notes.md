### Comparison Sorts ### 
* sorting algorithms where 2 things are being compared one at a time. So far all of our sorts have been comparison sorts.
* the best time complexity possible for a comparison sort is O(n log n)

# Radix Sort #
* not a comparison sort
* works on numbers only
* exploits the fact that information about the size of a number is encoded in the number of digits
* sorts numbers based on the values that they have at each position
* helpers
    * getDigit - returns the place of a digit in a number
    * digitCount - counts digits a number has
    * mostDigits - returns digit count of num with most digits in arr

