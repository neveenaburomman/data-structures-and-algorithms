'use strict';
const LinkedList = require('../linked-list/linkedlist');

class hashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let sum = 0;
    let str = key.toString().split("");
    for (let i = 0; i < str.length; i++) {
      sum = sum + str[i].charCodeAt()
    }
    return sum % (this.size)
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    } 

      return this.table[index].append({ key:key ,value:value});

  }
   

  get(key) {
     const index = this.hash(key);
    return this.table[index].head.value.value;
  }
      

  contain(key){
    for(let i = 0; i <= this.table.length;i++){   
      if (this.table[i] && this.table[i].head.value.key === key){
        
        return true;
      }
    }
    return null;
  }
keys(){
        let allkeys = [];
        for(let i = 0; i < this.table.length; i++){
          if(this.table[i]){
            let current = this.table[i].head;
            //console.log(current)
            while(current){
              allkeys.push(current.value.key);
              
              current = current.next;
            }
          }
        }
        return allkeys;
      }

}


module.exports = hashTable;

