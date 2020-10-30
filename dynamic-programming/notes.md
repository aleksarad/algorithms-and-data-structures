# Dynamic Programming #

A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

When to use:
* optimal substructure
    * if an optimal solution can be constructed from optimal solutions of its subproblems 
* overlapping subproblem
    * if it can be broken down into subproblems which are reused several times

Memoization
* storing the results of function calls and returning the result when the same inputs occur again

Buttom Up - Tabulation
* usually done using a loop
* storing the result of a previous result in a table