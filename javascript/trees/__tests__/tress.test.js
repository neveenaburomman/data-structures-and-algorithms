"use strict";
const {  BinaryTree, BinarySearchTree, breadthFirst} = require('../trees');
const Node = require('../node');


describe("testing the binary tree", () => {

    it("Can successfully instantiate an empty tree", () => {
        let tree = new BinaryTree();
        expect(tree.root).toBeNull();
      });

    it("Can successfully instantiate a tree with a single root node", () => {

        let tree = new BinaryTree();
         tree.root = new Node (90);
        expect(tree.root.value).toEqual(90);
        expect(tree.root.left).toBeNull();
        expect(tree.root.right).toBeNull();

    });
    it("can successfully add a left child and right child properly to a node", () => {

        let tree= new BinaryTree();
        tree.root=new Node (90);;
        tree.root.left=new Node(100);
        tree.root.right=new Node(80);
        expect(tree.root.value).toEqual(90);
        expect(tree.root.left.value).toEqual(100);
        expect(tree.root.right.value).toEqual(80);
    });
    it("Can successfully return a collection from a preorder traversal", () => {
        let tree= new BinaryTree();
        tree.root=new Node (90);;
        tree.root.left=new Node(100);
        tree.root.right=new Node(80);
        tree.root.left.left=new Node(120);
        tree.root.left.right=new Node(110);
        tree.root.right.right=new Node(60);
        tree.root.right.left=new Node(70);

      expect(tree.preOrder()).toEqual([ 90, 100, 120, 110, 80, 70, 60 ]);
    });
    it("Can successfully return a collection from a inorder traversal", () => {
        let tree= new BinaryTree();
        tree.root=new Node (90);;
        tree.root.left=new Node(100);
        tree.root.right=new Node(80);
        tree.root.left.left=new Node(120);
        tree.root.left.right=new Node(110);
        tree.root.right.right=new Node(60);
        tree.root.right.left=new Node(70);

      expect(tree.inOrder()).toEqual([ 120, 100, 110, 90, 70, 80, 60 ]);
    });
    it("Can successfully return a collection from a postorder traversal", () => {
        let tree= new BinaryTree();
        tree.root=new Node (90);;
        tree.root.left=new Node(100);
        tree.root.right=new Node(80);
        tree.root.left.left=new Node(120);
        tree.root.left.right=new Node(110);
        tree.root.right.right=new Node(60);
        tree.root.right.left=new Node(70);

      expect(tree.postOrder()).toEqual([ 120, 110, 100, 70, 60, 80, 90 ]);
    });

    it("test the getMax method  ", () => {

        let tree= new BinaryTree();
        tree.root=new Node (90);;
        tree.root.left=new Node(100);
        tree.root.right=new Node(80);
        tree.root.left.left=new Node(120);
        tree.root.left.right=new Node(110);
        tree.root.right.right=new Node(60);
        tree.root.right.left=new Node(70);

      expect(tree.getMax()).toEqual(120);

      });

    it("testing contains method for binary search tree", () => {
        const searchValue = new BinarySearchTree();
        searchValue.add(100);
        searchValue.add(90);
        searchValue.add(80);
        searchValue.add(120);
        searchValue.add(140);
        
        expect(searchValue.contains(90)).toBeTruthy();
        expect(searchValue.contains(120)).toBeTruthy();
        expect(searchValue.contains(2)).toBeFalsy();
        expect(searchValue.contains(70)).toBeFalsy();
      });



  });


  describe("testing the tree-breadth-first ", () => {

    it("Can successfully order the  tree in breadthfirst method ", () => {

        let tree= new BinaryTree();
        tree.root=new Node (90);;
        tree.root.left=new Node(100);
        tree.root.right=new Node(80);
        tree.root.left.left=new Node(120);
        tree.root.left.right=new Node(110);
        tree.root.right.right=new Node(60);
        tree.root.right.left=new Node(70);

      expect(breadthFirst(tree)).toEqual([ 90, 100, 80, 120, 110, 70, 60 ]
        );
      });

    });

