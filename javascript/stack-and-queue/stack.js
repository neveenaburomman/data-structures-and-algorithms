'use strict';
const LinkedList =require('../linked-list/linkedlist');

class Stack {
    constructor(){
        this.storage = new LinkedList;
        this.top=null;

    }
//adds a new node with that value to the top of the stack
    push(value){

     this.storage.insert(value);
     this.top=this.storage.head.value;
     return this.top

       
    }
//Returns: the value from node from the top of the stack
//Removes the node from the top of the stack
//Should raise exception when called on empty stack

pop(){
    let newStack=new LinkedList;
    let theTop= this.storage.head.value;
    let current =this.storage.head.next;
    
    while (current){

    newStack.insert(current.value);

     current =current.next ;

    }
   this.storage=newStack 

 return theTop;

}

//Returns: Value of the node located at the top of the stack
//Should raise exception when called on empty stack
peek(){

    
    this.top = this.storage.head.value ;
    return this.top ;
}


//Returns: Boolean indicating whether or not the stack is empty.

isEmpty(){

    return this.storage.head.value == null;

}



}




module.exports =Stack;