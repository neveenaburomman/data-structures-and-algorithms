'use strict';
const queue=require('./queue');

class animalShelter{

    constructor(animal) {

        this.animal=new Queue();
        }
       
enqueue(pref){
 if (pref.type=="cat"|| "dog"){
   
  this.animal.enqueue(pref);
   
  }
else  {
    return "this shelter for dogs and cats only";
}}

dequeue(pref){
    if (pref.type=="cat"|| "dog"){
   
  this.animal.dequeue(pref);
   
  }
   else{
    return "this shelter for dogs and cats only ";

   }
   
}}

class cats extends animalShelter {
    constructor(animal) {
        super(animal);
    }
       getCats(){
        // console.log(this.animal.storage.head.value);
           return this.animal
         
       }

}
class dogs extends animalShelter {
    constructor(animal) {
        super(animal);
}
getDogs(){
    console.log(this.animal);
    return this.animal
}
}

module.exports={animalShelter,cats,dogs};


