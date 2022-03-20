const PsuedoQueue = require("../stack-queue-pseudo");

describe("testing the queue", () => {

  it("test the queue", () => {

    let newQueue = new PsuedoQueue();
    expect(newQueue instanceof PsuedoQueue).toBeTruthy();
    
  });

  it("testing the enqueue method ", () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.firstStack.storage.head.value).toEqual(2)
    
  });

  it("testing deQueue method", () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.deQueue();
    expect(newQueue.secondStack.storage.head.value).toEqual(3);
   
  });
});