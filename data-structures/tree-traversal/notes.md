# Tree Traversal #

* Given any tree, how do we visit every node 1 time?
* Unlike in a linked list, there is no linear path.
* What approach to take?

## Approaches ##
* *Breadth First Search*
    * Working across the tree
    * Iteratively:
        * create a queue (can be array), and a variable to store the values of nodes visited (the queue acts like a to-do list)
        * place the root node in the queue
        * loop as long as there is anything in the queue
        * dequeue a node from the queue and push the value of the node into the variable that stores the nodes 
        * if there is a left property on the node dequeued, add it to the queue
        * if there is a right property on the node dequeued, add it to the queue
        * return the variable that stores our values
* *Depth First Search*
    * Going down the tree
        * Pre Order
            * Create a variable to store the values of nodes visited
            * store the root of the BST in a variable called current
            * write a helper function which accepts a node:
                * push the value of the node to the variable that stores the values
                * if the node has a left property, call the helper function with the left property on the node.
                * if the node has a right property, call the helper function with the right property on the node.
            * invoke the helper function on the current variable
            * return arr of values
        * Post Order
        * In order
