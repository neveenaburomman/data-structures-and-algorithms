"use strict";

let Graph = require("../graph");



describe("testing the Graph", () => {


  it("Node can be successfully added to the graph", () => {
    let graph = new Graph();
    graph.AddNode(1);
    graph.AddNode(2);

    expect(graph.Size()).toBe(2);
  });
  it("An edge can be successfully added to the graph", () => {
    let graph = new Graph();
    graph.AddNode(1);
    graph.AddNode(2);
    graph.AddEdge(1, 2, 3 );
    graph.AddNode(4);
    graph.AddNode(5);
    graph.AddEdge(4, 5, 6);

    expect(graph.GetNeighbors(1)[0].weight).toBe(3);
    expect(graph.GetNeighbors(4)[0].weight).toBe(6);
  });
  it("A collection of all nodes can be properly retrieved from the graph", () => {
    let graph = new Graph();
    graph.AddNode(1);
    graph.AddNode(2);
    graph.AddNode(3);
    expect(graph.GetNodes()).toBeDefined();
  });

  it("All appropriate neighbors can be retrieved from the graph", () => {
    let graph = new Graph();
    graph.AddNode(1);
    graph.AddNode(2);
    graph.AddNode(4);
    graph.AddEdge(1, 2, 3);

    expect(graph.GetNeighbors(1)[0].vertex).toBe(2);

  });

  it("Neighbors are returned with the weight between nodes included", () => {
    let graph = new Graph();
    graph.AddNode(1);
    graph.AddNode(2);
    graph.AddEdge(1, 2, 3);

    expect(graph.GetNeighbors(1)[0].weight).toBe(3);
  });

  it("The proper size is returned, representing the number of nodes in the graph", () => {
    let graph = new Graph();
    graph.AddNode(1);
    graph.AddNode(2);
    graph.AddNode(3);
    graph.AddEdge(1, 2);

    expect(graph.Size()).toEqual(3);
  });

  it("A graph with only one node and edge can be properly returned", () => {
    let graph = new Graph();

    graph.AddNode(1);
    graph.AddEdge(2,1,3);

    expect(graph.Size()).toEqual(1);
  });

  it("An empty graph properly returns null", () => {
    let graph = new Graph();

    expect(graph.isEmpty()).toEqual(null);
  });
});