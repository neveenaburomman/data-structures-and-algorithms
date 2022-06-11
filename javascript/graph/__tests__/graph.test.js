"use strict";

let {Graph,businessTrip,DepthFirst,Vertex,BreadthFirst } = require("../graph");



describe("testing the Graph", () => {


  it("Node can be successfully Added to the graph", () => {
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

describe("testing the DepthFirst ", () => {

  it('return all nodes depth first  in correct order', () => {
    const graph = new DepthFirst();

    const four = new Vertex(4);
    const nine = new Vertex(9);
    const one = new Vertex(1);
    const five = new Vertex(5);
    const twelve = new Vertex(12);
    const elven = new Vertex(11);

    const expected = new Set();
    expected.add(four);
    expected.add(nine);
    expected.add(twelve);
    expected.add(one);
    expected.add(elven);
    expected.add(five);

    graph.AddNode(four);
    graph.AddNode(nine);
    graph.AddNode(one);
    graph.AddNode(five);
    graph.AddNode(twelve);
    graph.AddNode(elven);

    graph.AddEdge(four, nine);
    graph.AddEdge(four, one);
    graph.AddEdge(four, five);
    graph.AddEdge(four, twelve);
    graph.AddEdge(nine, twelve);
    graph.AddEdge(one, twelve);
    graph.AddEdge(one, elven);
    graph.AddEdge(five, elven);
    graph.AddEdge(elven, twelve);

    expect(graph.depth(four)).toEqual(expected);
  });
    });

    describe('Graph Breadth Testing', () => {

      it('should return all nodes breadth first properly', () => {
        const graph = new BreadthFirst();

        const Pandora = new Vertex('Pandora');
        const Arendelle = new Vertex('Arendelle');
        const Metroville = new Vertex('Metroville');
        const Monstroplolis = new Vertex('Monstroplolis');
        const Narnia = new Vertex('Narnia');
        const Naboo = new Vertex('Naboo');

        graph.AddNode(Pandora);
        graph.AddNode(Arendelle);
        graph.AddNode(Metroville);
        graph.AddNode(Monstroplolis);
        graph.AddNode(Narnia);
        graph.AddNode(Naboo);

        graph.AddEdge(Pandora, Arendelle);
        graph.AddEdge(Arendelle, Metroville);
        graph.AddEdge(Arendelle, Monstroplolis);
        graph.AddEdge(Metroville, Monstroplolis);
        graph.AddEdge(Metroville, Narnia);
        graph.AddEdge(Metroville, Naboo);
        graph.AddEdge(Monstroplolis, Naboo);
        graph.AddEdge(Narnia, Naboo);

        const expectedSet = new Set();
        expectedSet.add(Pandora);
        expectedSet.add(Arendelle);
        expectedSet.add(Metroville);
        expectedSet.add(Monstroplolis);
        expectedSet.add(Narnia);
        expectedSet.add(Naboo);
    
        

        expect(graph.breadth(Pandora)).toEqual(expectedSet);
      });
     
    });
  
