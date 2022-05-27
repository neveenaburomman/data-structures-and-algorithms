'use strict';

const HashTable = require('../hashTable/hashTable')

function treeIntersection(tree1, tree2) {
    let intersectionArr = [];

 const traverse = node =>{
   intersectionArr.push(node.value);
   if (node.left) traverse(node.left);
   if (node.right) traverse(node.right);
 };
 traverse(tree1.root);
 traverse(tree2.root);

 let hashTable1 = new HashTable(100);

 for (let i = 0; i < intersectionArr.length; i++) {
if(hashTable1.table[i]!== undefined){
 }
   hashTable1.set(`${intersectionArr[i]}`,intersectionArr[i]);
   
 }
 
 let arr = [];

 for (let i = 0; i < hashTable1.table.length; i++) {

   if ( hashTable1.table[i] && hashTable1.table[i].head.next){

     arr.push( hashTable1.table[i].head.value.value);

   }
 }
if(arr.length==0){
 return "no intersection"
}
else{
 return arr;
}
}

       


module.exports = treeIntersection;