'use strict';
const queue=require('./queue');

class animalShelter{

    constructor() {

        this.cat= new queue();
        this.dog = new queue();
        }
       
enqueue(animal){
 if (animal=="cat"){
this.cat.enqueue(animal);
}
else {
    this.dog.enqueue(animal)
}}

dequeue(animal){
    if (animal=="cat"){
   this.cat.dequeue(animal);
   }
   else {
       this.dog.dequeue(animal)
   }}
   
   



}
module.exports=animalShelter;


