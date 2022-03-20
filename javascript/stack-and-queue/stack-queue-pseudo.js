"use strict";

const Stack = require("./stack");

class psuedoQueue {
    constructor() {

        this.firstStack=new Stack();
        this.secondStack = new Stack();
    }
   
    enqueue(value){
        this.firstStack.push(value)
}
  
deQueue(){
  if(this.firstStack.top){

    this.secondStack.push(this.firstStack.storage.head.value);
    this.firstStack.pop();
    
}
else{
    return "Q is empty";
}

}
}
module.exports = psuedoQueue;