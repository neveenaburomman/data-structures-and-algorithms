'use strict';

const  HashTable  = require('../hashTable/hashTable')

function treeIntersection(tree1, tree2) {
    const firstTree = tree1.preOrder();
    const secondTree = tree2.preOrder();

    let trees = [tree1, tree2];
    let hashtable = new HashTable();
    let intersectionHash = new HashTable();

    let intersectioArr = [];
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < trees[j].length; i++) {
            let element = trees[j][i];
            if (!hashtable.contain(element)) {
                hashtable.set(element, element)

            } else if (!intersectionHash.contain(element)) {
                intersectionHash.set(element, element);
                intersectioArr.push(element);
            }
        }
    }
    if (intersectioArr.length === 0) {

        return "no intersections "
    }
    return intersectioArr;
}



module.exports = treeIntersection;