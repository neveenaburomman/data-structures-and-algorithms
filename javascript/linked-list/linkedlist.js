'use strict';

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if(!this.head) { //means LL is empty
            this.head = node;
        } else { //means LL is not empty
            node.next = this.head;
            this.head = node;
        }
    }
    append(value) {
        const node = new Node(value);
        if(!this.head) { 
            this.head = node;
        } else { 
            let currentNode = this.head;
      
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
      }

      includes(value) {
        
        let  current = this.head; // Initialize current

        while (current != null) {

            if (current.data == value)

                return true; // data found
            current = current.next;
        }
        return false; // data not found
    
  }
   
  





}


module.exports = LinkedList;