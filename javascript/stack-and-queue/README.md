# Stacks and Queues

- stack => A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.
- queues => Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

## Approach & Efficiency

O(1) Time performance

## API
- Stack 

push => Arguments: value 
        adds a new node with that value to the top of the stack 
pop => Arguments: none  
       Returns: the value from node from the top of the stack
       Removes the node from the top of the stack
peek =>Arguments: none
       Returns: Value of the node located at the top of the stack
isempty => Arguments: none
          Returns: Boolean indicating whether or not the stack is empty.

- Queue

enqueue => Arguments: value
           adds a new node with that value to the back of the queue 
          Returns: the value from node from the front of the queue
          Removes the node from the front of the queue
peek =>   Arguments: none
          Returns: Value of the node located at the front of the queue
is empty=> Arguments: none
          Returns: Boolean indicating whether or not the queue is empty