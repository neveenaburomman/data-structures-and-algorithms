# Challenge Summary

Quick Sort => QuickSort is a Divide and Conquer algorithm same as merge sort. It picks an element as pivot and partitions the array around this picked pivot.
by  by breaking an array (partition) into smaller ones and swapping the smaller ones, depending on a comparison with the 'pivot' element picked.

in this challenge we will Convert the pseudo-code for quickSort function  into working code  and  trace the algorithm by stepping through the process .


## Whiteboard Process 

![wb 3](https://user-images.githubusercontent.com/90922969/167314408-14f78327-7f06-4c32-baec-bd00ccca9a2d.jpg)


## Approach & Efficiency

    time complexity O(nlog(n)) => because quicksort function will call itself on the order of log(n) times
    space complexity O(log(n)) =>  based on the space used in the recursion stack.

## blog
[blog](https://github.com/neveenaburomman/data-structures-and-algorithms/blob/main/javascript/quickSort/BLOG.md)

## solution 
```ruby
npm test quickSort
```
