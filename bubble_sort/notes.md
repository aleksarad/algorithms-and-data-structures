* built in js sort methods:
    * sort -> sorts according to unicode string, which can make it funky with some strings and all nums.
    * you can add a comparator to .sort to specify how you want to sort

# Bubble Sort # 

* O(n^2) complexity
* if data is mostly sorted -> O(n)
* largest values bubble to the top/end
* swapping:

    ```javascript
    function swap(arr, id1, id2) {
        //temp is the placeholder
        let temp = arr[id1];
        arr[id1] = arr[id2];
        arr[id2] = temp;
    }
    ```
* pseudocode:
    * start looping with a var called i at the end of the arr toward the beginning
    * start an inner loop with a variable called j from the beginning until i-1
    * if arr[j] > than arr[j+1] swap those two