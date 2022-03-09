'use strict';

// Require our linked list implementation
const LinkedList = require('../linkedlist');

const { it, describe } = require("eslint/lib/rule-tester/rule-tester");

describe('testing Linked List', () => {
  it('test creating an LL instance', () => {

     const ll =new LinkedList();
     expect(ll).toBeInstanceOf(LinkedList);
     expect(ll.head).toBeNull();
     

  });
})
  describe('insert to the beginning of the LL',()=>{
   //we have two cases
   //1. if the LL empty
    it('add to an empty LL',()=>{
      const ll=new LinkedList();
      ll.insert('a');
      expect(ll.head.value).toEqual('a');
      expect(ll.head.next).toBeNull();
      
    })
    //2. if the LL not empty
    it('add to not empty LL',()=>{
      const ll=new LinkedList();
      ll.insert('a');
      ll.insert('b');
      ll.insert('c');

      expect(ll.head.value).toEqual('c');
      expect(ll.head.next.value).toEqual('b');
      expect(ll.head.next.next.value).toEqual('a');
      expect(ll.head.next.next.next).toBeNull();
  
  })

  it('testing include',()=>{

    const ll = new LinkedList ()
    ll.insert('z');
    ll.insert('b');
    ll.insert('n');
    ll.insert('h');
    expect(ll.includes('r')).toEqual(false);
    expect(ll.includes('n')).toEqual(true);

  })

  it('testing toString',()=>{

    const ll = new LinkedList ()
    ll.insert('z');
    ll.insert('b');
    ll.insert('s');
    ll.insert('n');

    expect(ll.toString()).toEqual("{n} -> {s} -> {b} -> {z} -> NULL");
    

  })



});
