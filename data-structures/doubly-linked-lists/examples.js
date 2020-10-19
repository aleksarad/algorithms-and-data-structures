
class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null 
        this.length = 0
    }

    print(){
        let arr = []
        let node = this.head 
        while(node){
            arr.push(node.val)
            node = node.next
        }
        console.log(arr)
    }

    //add to end
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail 
            this.tail = newNode
        }
        this.length++
        return this
    }
    //remove and return last item
    pop(){
        if(!this.head) return undefined
        let nodeToRemove = this.tail 
        if(this.length === 1){
            this.tail = null 
            this.head = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.length--
        nodeToRemove.prev = null 
        return nodeToRemove
    }

    //remove from beginning
    shift(){
        if(!this.head) return undefined 
        let nodeToRemove = this.head 
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = nodeToRemove.next 
            this.head.prev = null 
            nodeToRemove.next = null
        }
        this.length-- 
        return nodeToRemove
    }

    //add to beginning
    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.tail = newNode
            this.head = newNode
        } else {
            this.head.prev = newNode 
            newNode.next = this.head 
            this.head = newNode
        }
        this.length++
        return this
    }

    //get node
    get(index){
        if(index < 0 || index >= this.length) return null 

        let half = this.length/2
        if(index <= half) {
            let node = this.head
            for(let count = 0; count <= index; count++){
                if(count === index){
                    return node
                }
                node = node.next
            }
        }
        else {
            let node = this.tail 
            for(let count = this.length-1; count >= index; count--) {
                if(count === index){
                    return node.val
                }
                node = node
            }
        }
    }

    set(index, val){
        let nodeAtIndex = this.get(index)
        if(nodeAtIndex){
            nodeAtIndex.val = val
            return true
        } else {
            return false
        }
    }

    insert(index,val){
        // if(index < 0 || index > this.length) return false 
        // if(index === 0) return this.unshift(val)
        // if(index === length) return this.push(val)
    
        // let newNode = new Node(val)
        // let prevNode = this.get(index-1)
        // let nextNode = prevNode.next

        // prevNode.next = newNode
        // newNode.prev = prevNode
        // newNode.next = nextNode
        // nextNode.prev = newNode
        // this.length++
        // return true

        //find bug in the above ^^^

        if(index < 0 || index > this.length) return false
        if(index === 0) return this.unshift(val)
        if(index === this.length) return this.push(val)

        let newNode = new Node(val)
        let beforeNode = this.get(index-1)
        let afterNode = beforeNode.next
        
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined 
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()

        let nodeToRemove = this.get(index)
        let prevNode = nodeToRemove.prev 
        let nextNode = nodeToRemove.next 

        prevNode.next = nextNode
        nextNode.prev = prevNode 

        nodeToRemove.next = null 
        nodeToRemove.prev = null 

        this.length--
        return nodeToRemove
    }

}


let newList = new DoublyLinkedList()
newList.push('hi')
newList.push('there')
newList.push('list')
