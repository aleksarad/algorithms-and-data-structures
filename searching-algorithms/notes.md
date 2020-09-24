# Searching Algorithms #

* Linear search on arrays
    * looking at every element in the array to check if it's the value we want.
    * JS built in linear sort methods: 
        * indexOf
        * includes
        * find
        * findIndex
    * Linear search pseudocode
        * accepts an array and val
        * loop thru array and check if current item === val
            * if found, return index
            * if not, return -1
* Binary search on **sorted arrays**
    * instead of eliminating 1 value at a time, binary search eliminates half.
    * splitting up an array in halves
    * binary pseudocode
        * accepts sorted array and value
        * 2 variables, left and right pointer, the beginning and end of arr
        * loop -> check element, only loop while left is before the right pointer
        * if the value is too small, move left pointer up
        * if value is too big, move right pointer down
        * return -1 if value isnt found
* Naive string search
    * you want to count the times a smaller string appears in a longer string
    * pseudocode:
        * loop over longer string
        * loop over shorter string
        * check match
            * if yes -> keep looping short string until complete
                * increase counter
            * if no -> exit shorter string loop
        * return count