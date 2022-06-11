"use strict";
const Queue =require('../stack-and-queue/queue')

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
    if (!this.adjacencyList.has(start)) {
      return this.adjacencyList.has(start);
    } else {
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
    } else {
      return 'Vertex does not exist';
    }
  }


  Size() {
    if (this.adjacencyList.size) {
      return this.adjacencyList.size;
    }
  }


  isEmpty() {
    if (!this.adjacencyList.size > 0) {
      return null;
    }
  }

}
class BreadthFirst extends Graph {

  breadth(startingNode) {
    if (!startingNode) return 'INVALID NODE';
    const queue = new Queue();

    const visitedNodes = new Set();


    queue.enqueue(startingNode);
    visitedNodes.add(startingNode);

    while (queue.peek()) {

      const currentNode = queue.dequeue();
      const neighbors = this.GetNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else 
        {
          visitedNodes.add(neighborNode);
          queue.enqueue(neighborNode);
        }
      }
    }

    return visitedNodes.size > 0 ? visitedNodes : 'EMPTY GRAPH';
  }
}


class DepthFirst extends Graph {

  depth(firstNode) {

    const visted = new Set();

    const traverse = (node) => {

      visted.add(node);

      const neighbors = this.GetNeighbors(node);

      for (let edge of neighbors) {

        if (!visted.has(edge.vertex)) {
          traverse(edge.vertex);
        }
      }
    };
    traverse(firstNode);
    if (visted.size > 0) {
      return visted;
    }
    else { return "empty graph" }
  }
}


function businessTrip(graph, array) {

  let cost = 0;

  for (let i = 0; i < array.length; i++) {
    let edges = graph.GetNeighbors(array[i]);
    for (let j = 0; j < edges.length; j++) {
      if (edges[j].vertex === array[i + 1]) {
        cost += edges[j].weight;
      }
    }
  }
  if (cost === 0) {
    return null
  }
  else {
    return `${cost}$`;
  }
}
console.log("hiiiiiiiiiiiiiiiiii")
module.exports = { Graph, DepthFirst, Vertex, businessTrip, BreadthFirst };

