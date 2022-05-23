const { BinaryTree} = require('../../trees/trees');
const Node = require('../../trees/node');
const treeIntersection=require('../treeIntersection');

let tree1= new BinaryTree();
    tree1.root=new Node (42);
    tree1.root.left=new Node(90);
    tree1.root.right=new Node(600);
    tree1.root.left.left=new Node(15);
    tree1.root.left.right=new Node(160);
    tree1.root.right.right=new Node(350);
    tree1.root.right.left=new Node(200);

let tree2= new BinaryTree();
    tree2.root=new Node (150);
    tree2.root.left=new Node(100);
    tree2.root.right=new Node(250);
    tree2.root.left.left=new Node(75);
    tree2.root.left.right=new Node(160);
    tree2.root.right.right=new Node(350);
    tree2.root.right.left=new Node(200);

  /*  describe('tree Intersection testing', () => {

        test('“successfully return the set of values found in both trees. ', () => {
            expect(treeIntersection(tree1, tree2)).toEqual([3, 6, 7])
    
        })
        test('test the function when there\'s no intersections value', () => {
            expect(treeIntersection(t1, t3)).toEqual([7, 6])
    
    
        })
        test('Expected failure)', () => {
            expect(treeIntersection(t1, t4)).toEqual("no intersections ")
    
        })
    })*/
    