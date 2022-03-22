const animalShelter = require("../stack-queue-animal-shelter");

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
});