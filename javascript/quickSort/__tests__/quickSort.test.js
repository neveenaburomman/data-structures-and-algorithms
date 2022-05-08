'use strict';

const quickSort = require('../quickSort');

describe('testing the quickSort', () => {

    it('test if it will sort an array',()=>{

        let arr = [8,4,23,42,16,15];
        expect( quickSort(arr,0,5)).toEqual([ 4, 8, 15, 16, 23, 42 ])
        
    })

    it('test a Reverse-sorted',()=>{

        let arr = [20,18,12,8,5,-2];
        expect( quickSort(arr,0,5)).toEqual([ -2, 5, 8, 12, 18, 20 ])
    })

    it('test if we have empty array ',()=>{

        let arr = [];
        expect( quickSort(arr)).toEqual([])
    })
    
});