# Graphs
 graph data structure consists of a finite (and possibly mutable) set of vertices (also called nodes or points), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

## Challenge
immplement a Graph. The graph should be represented as an adjacency list, and should include the following methods:
- add node : Add a node to the graph
- add edge : Adds a new edge between two nodes in the graph
- get nodes  
- get neighbors  
- size
   
## Approach & Efficiency

- Add node : -  time complexity O(1) => This is because it takes the same amount of time no matter how many Nodes (n)
             -  space complexity O(1) => because we didn't use any extra space  
             
- Add edge : -  time complexity O(1) => This is because it takes the same amount of time no matter how many Nodes (n) 
             -  space complexity O(1) => because we didn't use any extra space 
             
- Get nodes : -  time complexity O(1) => This is because it takes the same amount of time no matter how many Nodes (n)
              -  space complexity O(1) =>  because we didn't use any extra space 
              
- Get neighbors : -  time complexity O(1) => This is because it takes the same amount of time no matter how many Nodes (n)
                  -  space complexity O(1) => because we didn't use any extra space 
                  
- size()  : -  time complexity O(1) => This is because it takes the same amount of time no matter how many Nodes (n)  
            -  space complexity O(1) =>  because we didn't use any extra space 
            
## API
- add node
   - Arguments: value
   - Returns: The added node
- add edge 
   - Arguments: 2 nodes to be connected by the edge, weight (optional)
   - Returns: nothing
- get nodes
   - Arguments: none
   - Returns all of the nodes in the graph as a collection (set, list, or similar)
- get neighbors
   - Arguments: node
   - Returns a collection of edges connected to the given node
- size
   - Arguments: none
   - Returns the total number of nodes in the graph
