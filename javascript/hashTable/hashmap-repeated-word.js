const HashTable = require('./hashTable');

function repeatedWord(string) {
    let hashTable = new HashTable(100);
    //console.log(HashTable)

    let array = string.split(' ');
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(',')) {
            array[i] = array[i].slice(0, array[i].length - 1);
            //  console.log(array)

        }
        if (hashTable.contain(array[i])) {

            return array[i];

        }

        hashTable.set(array[i], array[i]);
        // console.log(hashTable)

    }

}
// let s='Once upon a time, there was a brave princess who...'
//console.log(repeatedWord(s))

module.exports = repeatedWord;
