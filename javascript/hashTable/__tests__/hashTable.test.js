'use strict';

const HashTable = require('../hashTable');
const repeatedWord=require('../hashmap-repeated-word');
const leftJoin=require('../hashmap-left-join');
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
describe('testing  repeatedWord function ', () => {

  it('Can successfully find the first word that occur more than once', () => {
  
    let string ="Once upon a time, there was a brave princess who...";
    let string2="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."

    expect(repeatedWord(string)).toEqual("a");
    expect(repeatedWord(string2)).toEqual("summer");


  });
  describe('testing  leftJoins function ', () => {

    it('Can successfully find the first word that occur more than once', () => {
      
   let Synonyms = new HashTable(100);
      Synonyms.set("diligent", 'employed')
      Synonyms.set("fond", 'enamored')
      Synonyms.set("guide", 'usher')
      Synonyms.set("outfit", 'garb')
      Synonyms.set("wrath", 'anger')

   let Antonyms = new HashTable(100);
      Antonyms.set("diligent", 'idle')
      Antonyms.set("fond", 'averse')
      Antonyms.set("guide", 'follow')
      Antonyms.set("flow", 'jam')
      Antonyms.set("wrath", 'delight')

      expect(leftJoin (Synonyms, Antonyms)).toEqual([ [ 'fond', 'enamored', 'averse' ],
      [ 'guide', 'usher', 'follow' ],
      [ 'diligent', 'employed', 'idle' ],
      [ 'wrath', 'anger', 'delight' ],
      [ 'outfit', 'garb', null ] ]); });
  
  });
});