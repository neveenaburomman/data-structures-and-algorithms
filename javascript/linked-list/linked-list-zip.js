"use strict";

const LinkedList = require("./linkedlist");

function zipLists(list1, list2){

    let zippedList =new LinkedList;
    let current1=list1.head;
    let current2=list2.head;
    
     while (current1&&current2){
    
            zippedList.append(current1.value)
            zippedList.append(current2.value)
            current1=current1.next
            current2=current2.next
       //console.log(zippedList);
        }
      if (current1==null){
          while (current2){
            zippedList.append(current2.value)
            current2=current2.next
            return zippedList
          }
        
      }else{
        while (current1){
            zippedList.append(current1.value)
            current1=current1.next
            return zippedList
    
          
      }}
      return zippedList;
    } 
    module.exports = zipLists;
    //console.log(zipLists(list1, list2));
    //console.log(list1.toString());
   // console.log(list2.toString());



