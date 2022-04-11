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
//for the test 
/*const animalShelter = require("../stack-queue-animal-shelter");

describe("testing animalshelter", () => {
 
  it("testing enqueue ", () => {
    const animal = new animalShelter();
    animal.enqueue("cat");
    animal.enqueue("cat");
    animal.enqueue("dog");
    animal.enqueue("dog");
    animal.enqueue("cat");
    animal.enqueue("dog");
    expect(animal.cat.storage.toString()).toEqual("{cat} -> {cat} -> {cat} -> NULL");
    expect(animal.dog.storage.toString()).toEqual("{dog} -> {dog} -> {dog} -> NULL");
  });

  it("testing dequeue", () => {
    const  animal = new animalShelter();

    animal.enqueue("cat");
    animal.enqueue("cat");
    animal.enqueue("cat");
    animal.enqueue("cat");
    animal.dequeue("cat")

    expect(animal.cat.storage.toString()).toEqual("{cat} -> {cat} -> {cat} -> NULL");
  });
});*/

