//STACK
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
//we can't use the same push and pop from our singly linked list
//because those are not constant time - instead
//we are using shift and unshift but calling them push and pop

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
       this.first = null
       this.last = null
       this.size = 0
    }

    push(val){
        let newNode = new Node(val)
        if(this.size === 0) {
            this.first = newNode
            this.last = newNode 
        } else {
            let prevHead = this.first
            newNode.next = prevHead 
            this.first = newNode
        }
        this.size++
        return this.size
    }

    pop(){
        if(this.size === 0) return null 
        let nodeToRemove = this.first 
        if(this.size === 1) {
            this.first = null 
            this.last = null 
        } else {
            this.first = nodeToRemove.next
            nodeToRemove.next = null
        }
        this.size-- 
        return nodeToRemove
    }
}


//QUEUE
//arr queue
let queue = []
queue.push('1')
queue.push('2')

queue.shift()

//or 

queue.unshift('1')
queue.pop()


//class queue
//we're going to add to the end and remove from beginning

class Queue {
    constructor(){
       this.first = null
       this.last = null
       this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if(this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return this.size
    }

    dequeue(){
        if(this.size === 0) return null 
        let toBeRemoved = this.first 
        if(this.size === 1) {
            this.first = null 
            this.last = null
        } else {
            this.first = toBeRemoved.next 
            toBeRemoved.next = null
        }
        this.size-- 
        return toBeRemoved
    }
}