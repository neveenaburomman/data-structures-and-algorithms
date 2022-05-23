
'use strict';

function leftJoin(hashTable1, hashTable2) {
    let results = [];
    for (let i = 0; i < hashTable2.table.length; i++) {

        if (hashTable2.table[i] && hashTable1.contain(hashTable2.table[i].head.value.key)) {

            hashTable1.set(hashTable2.table[i].head.value.key, hashTable2.table[i].head.value.value);
        }
    }
    for (let i = 0; i < hashTable1.table.length; i++) {

        if (hashTable1.table[i]) {
            if (!hashTable1.table[i].head.next) {
                results.push([hashTable1.table[i].head.value.key,
                hashTable1.table[i].head.value.value,
                hashTable1.table[i].head.next]);
            }
            else {
                results.push([hashTable1.table[i].head.value.key,
                hashTable1.table[i].head.value.value,
                hashTable1.table[i].head.next.value.value]);
            }
        }
    }
    return results;
}
/*
let Synonyms = new hashTable(100);
Synonyms.set("diligent", 'employed')
Synonyms.set("fond", 'enamored')
Synonyms.set("guide", 'usher')
Synonyms.set("outfit", 'garb')
Synonyms.set("wrath", 'anger')
//console.log(Synonyms .keys())

let Antonyms = new hashTable(100);
Antonyms.set("diligent", 'idle')
Antonyms.set("fond", 'averse')
Antonyms.set("guide", 'follow')
Antonyms.set("flow", 'jam')
Antonyms.set("wrath", 'delight')

console.log(leftJoin
    (Synonyms, Antonyms))*/
    
    module.exports = leftJoin;
