'use strict';
class hashTable {
        constructor(size){
            this.table =  new Array(size);
            this.size = size;
          }
    
set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
      }  
hash(key) {
        
        let str=key.toString().length;
        return str % (this.size);
      
  }

get(key) {
    const index = this._hash(key);
    return this.table[index];
  }


}
module.exports = hashTable;

