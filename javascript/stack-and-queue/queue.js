"use strict";

const linkedlist=require('../linked-list/linkedlist');


class Queue{
 constructor(){
     this.storage=new linkedlist;
     this.front=null;
     this.rare=null;
 }
 //adds a new node with that value to the back of the queue with an O(1) Time performance.

 enqueue(value){

    this.storage.insert(value);
     this.rare=this.storage.head.value;
     return this.rare


 }
 //Returns: the value from node from the front of the queue
//Removes the node from the front of the queue
 dequeue(){
    let newStack=new linkedlist;
    let theTop= this.storage.head.value;
    let current =this.storage.head.next;
    
    while (current){

    newStack.append(current.value);

     current =current.next ;

    }
   this.storage=newStack 

 return theTop;

 }
  //Returns: Value of the node located at the front of the queue

 peek(){
     let val = this.storage.head
     if (val) {
        return val.value;
      }
      else {
        return null;
    }
}}

module.exports=Queue;



