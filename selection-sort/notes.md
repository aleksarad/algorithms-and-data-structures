# Selection Sort #
o(n^2) time complexity

* really slow.....
* similar to bubble sort, but instead of placing large values into sorted position, it places small values into sorted position
* sorted data accumulates at the beginning
* pseudocode:
    * store the first element as the min
    * compare this item to next item until you find a smaller number
    * if smaller, that is new min
    * if the new min is different than the one you started with, swap the values at those indeces 
    * repeat with next value until arr is sorted
* inefficient, but useful in a circumstance where minimal swaps are made -> since selection sort only swaps at the end of a loop, only if conditions are met.