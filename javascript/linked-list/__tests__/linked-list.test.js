'use strict';

// Require our linked list implementation
const LinkedList = require('../linkedlist');
const zipLists = require("../linked-list-zip");

const { it, describe } = require("eslint/lib/rule-tester/rule-tester");

describe('testing Linked List', () => {
  it('test creating an LL instance', () => {

    const ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll.head).toBeNull();


  });
})
describe('insert to the beginning of the LL', () => {
  //we have two cases
  //1. if the LL empty
  it('add to an empty LL', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();

  })
  //2. if the LL not empty
  it('add to not empty LL', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');

    expect(ll.head.value).toEqual('c');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('a');
    expect(ll.head.next.next.next).toBeNull();

  })

  it('testing include', () => {

    const ll = new LinkedList()
    ll.insert('z');
    ll.insert('b');
    ll.insert('n');
    ll.insert('h');
    expect(ll.includes('r')).toEqual(false);
    expect(ll.includes('n')).toEqual(true);

  })

  it('testing toString', () => {

    const ll = new LinkedList()
    ll.insert('z');
    ll.insert('b');
    ll.insert('s');
    ll.insert('n');

    expect(ll.toString()).toEqual("{n} -> {s} -> {b} -> {z} -> NULL");


  })
});

describe('linked-list-insertions', () => {

  it(' testing the append method', () => {

    const ll = new LinkedList();

    ll.append(1);
    ll.append(9);
    ll.append(9);
    ll.append(7);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.value).toBe(9);
    expect(ll.head.next.next.value).toBe(9);
    expect(ll.head.next.next.next.value).toBe(7);

  });
  it(' testing  the insertBefore method', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(9);
    ll.append(7);
    ll.insertBefore(7, 2)
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.value).toBe(9);
    expect(ll.head.next.next.value).toBe(2);
    expect(ll.head.next.next.next.value).toBe(7);
  });
  it(' testing  the insertAfter method', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(9);
    ll.append(7);
    ll.insertAfter(7, 2)
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.value).toBe(9);
    expect(ll.head.next.next.value).toBe(7);
    expect(ll.head.next.next.next.value).toBe(2);
  });
});

describe('testing kthFromEnd(k) method ', () => {

  it(' k is greater than the length of the linked list', () => {

    const ll = new LinkedList();

    ll.append(1);
    ll.append(9);
    ll.append(9);
    ll.append(7);

    expect(ll.kthFromEnd(5)).toBe("Exception");

  });
  it(' where k in  the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.append(5);
    ll.append(3);
    ll.append(1);
    ll.append(7);
    expect(ll.kthFromEnd(2)).toBe(3);

  });
  it(' Where the linked list is of a size 1', () => {
    const ll = new LinkedList();
    ll.append(5);
    expect(ll.kthFromEnd(0)).toBe(5);

  });
});

describe('testing linked-list-zip function  ', () => {

  it(' zipped two linked list with the same size ', () => {

    const list1 = new LinkedList();
    list1.append(5);
    list1.append(3);
    
    const list2 = new LinkedList();
    list2.append(1);
    list2.append(9);

    expect((zipLists(list1, list2)).toString()).toBe("{5} -> {1} -> {3} -> {9} -> NULL");

  });
  it('zipped two linked list with different size', () => {

    const list1 = new LinkedList();
    list1.append(5);
    list1.append(3);

    const list2 = new LinkedList();
    list2.append(1);
    

    expect((zipLists(list1, list2)).toString()).toBe("{5} -> {1} -> {3} -> NULL");

  });

});












