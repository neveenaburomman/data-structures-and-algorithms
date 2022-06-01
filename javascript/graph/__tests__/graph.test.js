"use strict";

let {Graph,businessTrip} = require("../graph");



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
describe("testing the businessTrip function ", () => {
  let graph = new Graph();
  graph.AddNode("Pandora")
  graph.AddNode("Arendelle")
  graph.AddNode("Monstropolis")
  graph.AddNode("Metroville")
  graph.AddNode("Naboo")
  graph.AddNode("Narnia")

graph.AddEdge("Pandora", "Arendelle", 150)
graph.AddEdge("Pandora", "Metroville", 82)
graph.AddEdge("Arendelle", "Monstropolis", 42)
graph.AddEdge("Arendelle", "Metroville", 99)
graph.AddEdge("Metroville", "Naboo", 26)
graph.AddEdge("Metroville", "Monstropolis", 105)
graph.AddEdge("Metroville", "Narnia", 37)
graph.AddEdge("Monstropolis", "Arendelle", 42)
graph.AddEdge("Monstropolis", "Metroville", 105)
graph.AddEdge("Monstropolis", "Naboo", 73)
graph.AddEdge("Naboo", "Narnia", 250)

  it("test graph business trip when two citis are not connected", () => {
    expect(businessTrip(graph, ['Naboo', 'Pandora'])).toBe(null);

  });
  it("test graph business trip two cities", () => {
    expect(businessTrip(graph, ['Pandora', 'Arendelle'])).toBe('150$');
  });
  it("test graph business trip when three citis are connected", () => {
    expect(businessTrip(graph, ['Pandora', 'Arendelle','Monstropolis'])).toBe('192$');
  });
});