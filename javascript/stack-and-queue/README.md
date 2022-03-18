# Stacks and Queues

- stack => A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.
- queues => Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

## Approach & Efficiency

#### Stack 

**push(value)**, **pop()**, **isEmpty()** and **peek()** all take O(1) time and space . We do not run any loop in any of these operations.This is because it takes the same amount of time no matter how many Nodes (n) you have in the stack.


#### Queue

Time and space complexity of both operations **enqueue(value)** , **dequeue()**  **peek()** and **iSempty**is O(1) as we only change few pointers in both operations. There is no loop in any of the operations.


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