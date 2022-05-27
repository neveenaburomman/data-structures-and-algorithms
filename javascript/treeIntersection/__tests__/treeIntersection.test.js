const { BinaryTree } = require('../../trees/trees');
const Node = require('../../trees/node');
const treeIntersection = require('../treeIntersection');


describe('tree Intersection testing 1', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node(10);
    tree1.root.left = new Node(15);
    tree1.root.right = new Node(19);
    tree1.root.left.right = new Node(1);
    tree1.root.right.right = new Node(12);
    tree1.root.right.left = new Node(6);

    let tree2 = new BinaryTree();
    tree2.root = new Node(10);
    tree2.root.left = new Node(13);
    tree2.root.right = new Node(19);
    tree2.root.left.right = new Node(3);
    tree2.root.right.right = new Node(12);
    tree2.root.right.left = new Node(5);

    test('“successfully return the set of values found in both trees. ', () => {
     expect(treeIntersection(tree1, tree2)).toEqual([ 19, 10, 12 ])

    })
})

    describe('tree Intersection testing 2', () => {

        let tree1 = new BinaryTree();
        tree1.root = new Node(10);
        tree1.root.left = new Node(15);
        tree1.root.right = new Node(19);
        tree1.root.left.right = new Node(1);
        tree1.root.right.right = new Node(12);
        tree1.root.right.left = new Node(6);

        let tree3 = new BinaryTree();
        tree3.root = new Node(17);
        tree3.root.left = new Node(14);
        tree3.root.right = new Node(4);
        tree3.root.left.right = new Node(8);
        tree3.root.right.right = new Node(11);
        tree3.root.right.left = new Node(2);
        test('test the function when there\'s no intersections value', () => {
        expect(treeIntersection(tree1, tree3)).toEqual("no intersection")


        })

    })
