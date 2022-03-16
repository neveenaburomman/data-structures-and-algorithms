'use strict';

const Queue = require('../queue');



describe('testing the queue', () => {
    it('test creaing a queue',()=>{
        let newQueue = new Queue();
        expect(newQueue instanceof Queue).toBeTruthy();
      
    });


    it('testing enqueue to the queue',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(1);
        expect(newQueue.rare).toEqual(1)
        newQueue.enqueue(2);
        expect(newQueue.rare).toEqual(2)
    })

    *it('testing dequeue from the queue',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        expect(newQueue.dequeue()).toEqual(3);
        expect(newQueue.dequeue()).toEqual(2);
        expect(newQueue.dequeue()).toEqual(1);
    })

    it('test the peek',()=>{
        let newQueue = new Queue();
         expect(newQueue.peek()).toBeNull();

    })
});