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
    
      

      includes(value) {
        
        let  current = this.head; // Initialize current

        while (current) {

            if (current.value == value){

                return true; // data found
            }

            current = current.next;
        }
        return false; // data not found
    
  }
   
  toString(){

      let stringLinked ="";
      let current= this.head;

      while(current){

    stringLinked +=`{${current.value}} -> `
      
    current= current.next;

      }

      stringLinked+=`NULL`;
      return stringLinked;

    

  }

}


module.exports = LinkedList;