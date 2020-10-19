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

    //changing/updating the value of a node based on its position
    set(index, val){
      let replace = this.get(index)
      if(replace) {
        replace.val = val
        return true
      } else {
          return false
      }
    }

    //insert
    //adding node at specific position
    insert(index, val) {
        if(index < 0 || index > this.length) return false 

        if(index === this.length) {
            this.push(val)
        } 
        else if(index === 0) { 
            this.unshift(val)
        } else {
            let newNode = new Node(val)
            let currentNode = this.get(index - 1)
            newNode.next = currentNode.next
            currentNode.next = newNode
            this.length++
        }
        return true
    }

    //remove value at index
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === this.length - 1) return this.pop()
        if(index === 0) return this.shift()
        else {
            let before = this.get(index-1)
            let nodeRemoved = before.next
            let after = nodeRemoved.next
            before.next = after
            this.length--
            return nodeRemoved
        }
    }

    //just to easily print vals into an array
    print(){
        let arr = []
        let current = this.head 
        while(current !== null) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    
    //**review this one */
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node

        let prev = null
        let next;

        for(let i = 0; i < this.length; i++) {
            next = node.next 
            node.next = prev 
            prev = node 
            node = next
        }
        return this
    }

}

let testList = new SinglyLinkedList()
testList.push(1)
testList.push(2)
testList.push(3)
testList.push(4)


