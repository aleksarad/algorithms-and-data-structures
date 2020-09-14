# Big O Notation #

* Evalutes time and space complexity (efficency) of algorithms 
* Allows us communicate how the runtime of an algorithm grows as the inputs grow.
* ### Why big O? ###
    * Determining which approach to code implementation is best.
    * Provides a system for classifying code performance.
    * Understanding tradeoffs between approaches.

### How can we measure 'better' code? ###
* Speed
* Memory Usage

### Problem with Time ###
* Different machines record different times, as do the same machines.
* Comparing speed for very fast algorithms may not be precise enough.

### If not time, then what...? ###
Counting number of operations

## Defining Big O ##
We say that an algrorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually **less** than a constant times f(n) as n increases.

f(n) where n is the input of a function. ex --> (f(n) = n), runtime is equal to n, and therefore increases linearly.

Big O is the worst case scenario, or upper bound of an algorithm.

* **O(1)** -  as n grows, the number of operations remains the same.
* **O(n)** - as n grows, so does the number of operations proportionally.
* **O(n^2)** - as n grows, runtime increases by n*n.
* **O(log n)** is slightly steeper than 1. as n gets larger, runtime grows at a very gradual rate.
* **O(nlog n)** better than O(n^2) but worse than O(n)

## Simplifying Big O Expressions ##
* Constants don't matter:
    * O(2n) -> O(n)
    * O(500) -> O(1)
    * O(12n^2) -> O(n^2)
* Smaller terms also don't matter:
    * O(n + 10) -> O(n)
    * O(n^2 + 12n) -> O(n^2)
* Shorthand
    1. Arithmetic operations are constant
        * +/- operations take roughly the same amount of time. 1 + 2 or 500000 + 2 take a similar amount of time to run.
    2. Variable assignment is constant
    3. Accessing elements in an array using an index is constant.
    4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside that loop.

## Space Complexity ## 
(the amount allocated)
* Ignore input size -> since more memory will obviously be used as inputs increase, that value is ignored. Auxiliary space complexity refers to space required by the algorithm and not the input.
* Primitives are constant space -> booleans, numbers, undefind + null.
* Strings use O(n) space, where n is the string length.
* Reference types like arrays and objects are generally also O(n), where n is the length or or number of keys.

## Logs ##
* Log is inverse exponentiation 
* log2(8) = 3 or 2 to which power equals 8. 2^3 = 8
* the log a num measures the number of times you can divide that num by 2 before you get a value that is either less than or equal to 1.


