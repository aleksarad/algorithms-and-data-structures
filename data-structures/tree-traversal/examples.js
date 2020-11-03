class Node {
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    //insert a node in a BST
    insert(val){
        let newNode = new Node(val)
        //if there is no root (BST is empty)
        //node becomes the root
        if(!this.root) {
            this.root = newNode
            return this
        } else {
            //otherwise, loop starting with root
            let current = this.root
            while(true){
                //if the value already exists in the BST
                if(val === current.value) return undefined
                //if the val is less than current, focus on left side
                if(val < current.value){
                    //if current.left doesn't have a node, then
                    //newNode can go there
                    if(current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                    //otherwise, redefine current as that left value
                    //and restart the loop
                        current = current.left
                    }
                } else if(val > current.value){
                    if(current.right === null) {
                        current.right = newNode 
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    find(val){
        if(!this.root) return false 
        else {
            let current = this.root 
            while(true && current){
                if(val === current.value) return true
                if(val < current.value){
                    if(current.left){
                        current = current.left
                    } else {
                        return false
                    }
                } else if(val > current.value) {
                    if(current.right){
                        current = current.right
                    } else {
                        return false
                    }
                }
            }
        }
    }

    BFSearch(){
        //FIFO
        let queue = []
        let vals = []
        let dequeued = ''
        queue.push(this.root)
        while(queue.length > 0){
            dequeued = queue.shift()
            vals.push(dequeued.value)
            if(dequeued.right !== null) queue.push(dequeued.right)
            if(dequeued.left !== null) queue.push(dequeued.left)
        }
        return vals
    }

    preOrderSearch(){
        const vals = []
        let current = this.root
        function helper(node){
            vals.push(node.value)
            if(node.left) helper(node.left)
            if(node.right) helper(node.right)
        }
        helper(current)
        return vals
    }
}


