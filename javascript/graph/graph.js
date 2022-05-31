"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  AddNode(vertex) {
    this.adjacencyList.set(vertex, []);
  }


  AddEdge(start, end, weight) {
    if (!this.adjacencyList.has(start)){
      return this.adjacencyList.has(start);
    }else{
      const newAdjacencies = this.adjacencyList.get(start);
      newAdjacencies.push(new Edge(end, weight));
    }

  }


  GetNodes() {
    if (this.adjacencyList.entries()) {
      return this.adjacencyList.entries();
    }
  }


  GetNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      return this.adjacencyList.get(vertex);
    }else{
      return 'Vertex does not exist';
    }
  }


  Size() {
    if (this.adjacencyList.size) {
      return this.adjacencyList.size;
    }
  }


  isEmpty() {
    if (!this.adjacencyList.size > 0 ) {
      return null;
    }
  }
}

bfs(startingNode)
{
 
    // create a visited object
    var visited = {};
 
    // Create an object for queue
    var q = new Queue();
 
    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue(startingNode);
 
    // loop until queue is empty
    while (!q.isEmpty()) {
        // get the element from the queue
        var getQueueElement = q.dequeue();
 
        // passing the current vertex to callback function
        console.log(getQueueElement);
 
        // get the adjacent list for current vertex
        var get_List = this.AdjList.get(getQueueElement);
 
        // loop through the list and add the element to the
        // queue if it is not processed yet
        for (var i in get_List) {
            var neigh = get_List[i];
 
            if (!visited[neigh]) {
                visited[neigh] = true;
                q.enqueue(neigh);
            }
        }
    }
}


module.exports = Graph;
