//node class
//stores a piece of data - val, and ref to next node - next

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

//pointer to head and tail

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0;
    }

    //PUSH
    //inserting into end
    //create a new node using value
    //if there is no head, set the head and tail to be the new node
    //otherwise, set the next property on the tail to be the new node,
    //and set the tail property to be that node as well
    push(val){
        let newNode = new Node(val)
        if(this.head === null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    //POP
    //removing node from the end of the list
    //keep in mind, singly linked lists don't have backwards pointers
    //so we need to go through the whole list

    //if there are no nodes, return undefined
    //loop through until you reach the tail
    //set the next property of the 2nd to last node to be null
    //update tail to that 2nd to last
    //decrement length
    //return the value of the node that was removed
    pop(){
        if(!this.head) return undefined 
        let newTail = this.head
        let oldTail = this.head
        while(oldTail.next !== null) {
            newTail = oldTail
            oldTail = oldTail.next
        }
        newTail.next = null
        this.tail = newTail
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return oldTail
    }

    //SHIFT
    //remove a node from the beginning of linked list
    shift(){
        if(!this.head) return undefined 
        let oldHead = this.head
        this.head = oldHead.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return oldHead
    }

    //UNSHIFT
    //add a new head
    unshift(val){
        let newNode = new Node(val)
        if(this.head){
            let oldHead = this.head
            this.head = newNode
            newNode.next = oldHead
        }
        else {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this;
    }

    //GET
    //retrieving a node by its position
    //accepts an index
    //if index is less than zero or greater than or equal to the length
    //of the list return null
    //loop thru until u reach index and return node at that index
    get(index){
        if(index < 0 || index >= this.length) return null
        let loopCount = 0
        let node = this.head
        while(loopCount !== index) {
            node = node.next
            loopCount++
        }
        return node
    }

    set(index, val){
      let replace = this.get(index)
      if(replace) {
        replace.val = val
        return true
      } else {
          return false
      }
    }

}

let testList = new SinglyLinkedList()
testList.push('nicki')
testList.push('is')
testList.push('queen')
// testList.unshift('onika')
console.log(testList.set(0, 'onika'))

// let newList = new SinglyLinkedList()
// newList.unshift('hey')

// console.log(newList)
