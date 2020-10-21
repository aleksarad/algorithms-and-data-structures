//creating our own stack with an array
let stack = []
//add
stack.push('google')
stack.push('youtube')
stack.push('instagram')

stack.pop()

//using push + pop is following LIFO and makes an array a stack

//similarly unshift and shift will have the same effect
//but are less efficient since moving things around at the beginning
// of the array causes a reindex


//stack class with singly linked list implementation
class Node {
    constructor(){
       this.first = null;
       this.last = null;
       this.size = 0;  
    }
}

class Stack {
    constructor(value){
        this.value = value;
        this.next = null;
    }

}