# Applying Big O to Arrays, Objs, and Built in Methods #

## Objects ##
* insertion, removal, access -> big O(1). this is because objects are unordered and rely on key value pairs
* searching for a value -> O(n)
* Object methods
    * Object.keys O(n) - we need to visit every key once to be able to return an array of keys, the time will depend on how many keys there are.
    * Object.values O(n)
    * Object.entries O(n)
    * hasOwnProperty O(1) since this just checks if a object has a key, it's simply retreiving at a key and then returning true/false.

## Arrays ##
* insertion - depends
    * adding to the end of arr - O(1)
    * adding to the beginning means updating index of all items after it - O(n)
* removal - depends
    * removing from end - O(1)
    * removing from beginning is similar to adding, causes reindexing - O(n)
* searching - O(n)
* access - O(1)
* Array Methods
    * sort - O(n * log n)
    * concat - O(n)
    * splice + slice O(n)
    * forEach/map/filter etc - O(n)
