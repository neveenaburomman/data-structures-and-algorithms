# Trees
<!-- Short summary or background information -->

## Challenge

- Create a **Node** class that has properties for the value stored in the node, the left child node, and the right child node.

- Create a **Binary Tree class** and define a method for each of the depth first traversals:
1- pre order
2- in order
3- post order
which returns an array of the values, ordered appropriately.

- Create a **Binary Search Tree** class
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
Add => Arguments: value , Return: nothing
Adds a new node with that value in the correct location in the binary search tree.
Contains => Argument: value , Returns: boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency

BinaryTree =>>

- preOrder: time complexity O(n) => because we  traverse each node once.
           space complexity O(h) => because there will be at most h recursive calls on the stack at any given moment, where h is the height of the tree

- inOrder: time complexity O(n) => because we traverse each node once.
            space complexity O(h)=> because there will be at most h recursive calls on the stack at any given moment, where h is the height of the tree

- postOrder:time complexity O(n)=>  because we traverse each node once.
            space complexity O(h)=>  because there will be at most h recursive calls on the stack at any given moment, where h is the height of the tree
          

BinarySearchTree=>>

- add:  time complexity O(log(n) => because in order to add  any given value, at most we need to search one branch from each node 
        space complexity O(1) => because we are not allocating any additional space.
            
- contains: time complexity O(n)=>because it will  depend on the number of the nodes
            space complexity O(1) => because we are not allocating any additional space.
          
          
 ### [the code](https://github.com/neveenaburomman/data-structures-and-algorithms/blob/main/javascript/trees/trees.js)
