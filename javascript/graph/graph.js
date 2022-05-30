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

function bfs(start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
}



module.exports = Graph;