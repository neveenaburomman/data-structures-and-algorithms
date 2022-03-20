
# stack-queue-pseudo

# Challenge Summary
implement a Queue using two Stacks.


## Whiteboard Process
![whiteboard11](https://user-images.githubusercontent.com/90922969/159144675-67e0d3ec-26a9-430a-aaf8-ad5986d31ec0.jpg)


## Approach & Efficiency

**enqueue**
-Push the value to stack1 , time complexity will be O(1)
**dequeue**
push everything from stack1 to stack2,  Pop the element from stack2 and return it.here time complexity will be O(n)
