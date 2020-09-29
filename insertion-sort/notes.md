# Insertion Sort #
* actually useful lol
* builds up the sort by gradually building a larger left portion which is always sorted
* inserting one item at a time into sorted portion
* Pseudocode:
    * take second element in array
    * compare second element to the one before it and swap if necessary
    * continue to the next element and if it is not in the correct order, iterate through the sorted portion to place the element in the correct place
    * repeat until array is sorted
* Big O:
    * O(n^2)
    * good for data that comes in dynamically