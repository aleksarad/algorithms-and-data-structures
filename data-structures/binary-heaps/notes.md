# Binary Heaps #

* Heaps are another category of trees
* Similar to binary search tree, but with different rules:
    * In a MaxBinaryHeap, parent nodes are always larger than child nodes. All children are smaller than parent.
    * In a MinBinaryHeap, parent nodes are always smaller than child nodes.

* Max Binary Heap:
    * Each parent has at most two nodes.
    * The value of each parent node is always greater than its child nodes.
    * In a max binary heap, the parent is greater than the children, but there are no guarantees between siblings.
    * Left children are filled out first
    * A binary heap is as compact as possible, all the children of each node are as full as they can be and left children are filled out first.

Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.

**Binary Heaps as Arrays**

* when a binary heap is flattened into an array, we can still find the child nodes of any parent
* if the index of a parent is *n*, the children will be another *n* forward, *n+1* for the left child, and *n+1* for the right child.
* in other words:
    * The left child is stored at *2n+1*
    * The right child is at *2n+2*
* finding a parent from a child at index *n*:
    * *Math.floor((n-1)/2)*


