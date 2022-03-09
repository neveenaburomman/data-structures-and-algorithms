# Singly Linked List

A singly linked list is a type of linked list that is unidirectional, it can be traversed in only one direction from head to the last node (tail). Each element in a linked list is called a node. A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.

## Challenge
 - Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

 - Create a Linked List class that contain the following methods :
insert , includes , toString 

 
## Approach & Efficiency

 insert an element => done in constant time O(1).
 
 inculdes method => The Big O of time for Includes would be O(n). This is because, at its worse case, the node we are looking for will be the very last node in the linked list. ,the Big O of space for Includes would be O(1). This is because there is no additional space being used than what is already given to us with the linked list input.

 


## API
 - insert => Adds a new node with value to the head of the list with an O(1) Time performance.
 - includes => Indicates whether a specific value exists in  a Node’s value somewhere within the list.
 - toString => Returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL" .
