# Trees #

## What is a tree? ##
A data structure that consists of nodes in a parent/child relationship. Each node can point to more than one node.
*Lists* -> Linear
*Trees* -> Nonlinear
    * A node can only point to a child, not to a sibling
    * A tree can only have one entry point

## Tree Terminology ##
* root - top node in a tree
* child
* parent
* siblings - a group of nodes with the same parent
* lead - node with no children
* edge - the connection between one node and another

## Uses for trees ##
* HTML DOM
* Network routing
* Abstract syntax trees -> sequence of programming language syntax 
* Artificial Intelligence
* descision tree
* folder structure

## Kinds of Trees #
* Binary Trees - at most 2 children per node
* Binary search trees - used to store data that can be compared
    * every parent has at most 2 nodes
    * every node to the left is always less than the parent
    * every node to the right of a parent node is always greater than the parent


## Big O of BST ##
* Insertion - O(log n)
* Searching - O(log n)

