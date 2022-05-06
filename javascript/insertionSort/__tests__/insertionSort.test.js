'use strict';

const insertionSort = require('../insertionSort');



describe('testing the insertionSort', () => {

    it('test if it will sort an array',()=>{

        let arr = [8,4,23,42,16,15];
        expect( insertionSort(arr)).toEqual([ 4, 8, 15, 16, 23, 42 ])
        
    })

    it('test a Reverse-sorted',()=>{

        let arr = [20,18,12,8,5,-2];
        expect( insertionSort(arr)).toEqual([ -2, 5, 8, 12, 18, 20 ])
    })

    it('test if we have empty array ',()=>{

        let arr = [];
        expect( insertionSort(arr)).toEqual([])
    })
    
});