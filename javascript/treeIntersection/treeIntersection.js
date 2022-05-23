'use strict';

const  HashTable  = require('../hashTable/hashTable')

function treeIntersection(tree1, tree2) {
    const firstTree = tree1.preOrder();
    const secondTree = tree2.preOrder();

    let trees = [firstTree, secondTree];
    let hashtable = new HashTable();
    let intersectionHash = new HashTable();

    let intersectionArr = [];
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < trees[j].length; i++) {
            let element = trees[j][i];
            if (!hashtable.contain(element)) {
                hashtable.set(element, element)

            } else if (!intersectionHash.contain(element)) {
                intersectionHash.set(element, element);
                intersectionArr.push(element);
            }
        }
    }
    if (intersectionArr.length=== 0) {

        return "no intersections "
    }
    return intersectionArr;
}



module.exports = treeIntersection;