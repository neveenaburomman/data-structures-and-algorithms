'use strict';

const Stack = require('../stack');



describe('testing the stack', () => {
    it('test creaing a Stack',()=>{
        let newStack = new Stack();
        expect(newStack instanceof Stack).toBeTruthy();
      
    });


    it('testing push to the stack',()=>{
        let newStack = new Stack();
        newStack.push(1);
        expect(newStack.top).toEqual(1)
        newStack.push(2);
        expect(newStack.top).toEqual(2)
    })

    *it('testing pop from the stack',()=>{
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        expect(newStack.pop()).toEqual(3);
        expect(newStack.pop()).toEqual(2);
        expect(newStack.pop()).toEqual(1);
    })

    it('test the peek',()=>{
        let newStack = new Stack();
         expect(newStack.peek()).toBeNull();

    })
});