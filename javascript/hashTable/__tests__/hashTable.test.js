'use strict';

const HashTable = require('../hashTable');

describe('Hash Table',()=>{

  let hashTable = new HashTable(100);
  let firstName= hashTable.set("1",'neveen')

  it('Successfully Adding a key/value to your hashtable results in the value being in the data structure',()=>{
     
      expect(firstName.value.key).toEqual('1');
      expect(firstName.value.value).toEqual('neveen');
    });

  it('Successfully returns null for a key that does not exist in the hashtable',()=>{
    expect(hashTable.contain("leen")).toBeNull();

  });

  it('Successfully handle a collision within the hashtable',()=>{
    let hashtable = new HashTable(100);
    hashtable.set('2','saja');
    hashtable.set('3','cyrine');
    let hashed = hashtable.hash('2');
    let hash = hashtable.table[hashed].head;
    expect(hash.value.value).toBeDefined();
    expect(hash.value.value).toEqual("saja");
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashtable2 = new HashTable(100);
    hashtable2.set('number','1');
    hashtable2.set('number','2');
    expect(hashtable2.table[49].head.value.value).toEqual("1");
    expect(hashtable2.table[49].head.next.value.value).toEqual("2");
  });
  it('Successfully hash a key to an in-range value',()=>{

    let hashed = hashTable.hash('neveen');
    expect(typeof hashed).toBe('number');
  });

});