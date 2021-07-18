'use strict';

const Graph = require('./index.js');

describe('Testing the features of the Graph', () => {

  const testGraph = new Graph();
  let vertexOne = null;
  let vertexTwo = null;
  let vertexThree = null;

  it('Graph should be able to add vertices', () => {
    vertexOne = testGraph.addVertex(1);
    expect(vertexOne.value).toEqual(1);
  });

  it('Graph should return an Error when no value is passed to addVertex', () => {
    expect(() => test.addVertex()).toThrow(Error);
  });

  it('Graph should be able to add Edges', () => {
    vertexTwo = testGraph.addVertex(2);
    vertexThree = testGraph.addVertex(3);

    let edgeOneTwo = testGraph.addDirectedEdge(vertexOne, vertexTwo);
    expect(edgeOneTwo.length).toEqual(1);

    let edgeTwoThree = testGraph.addDirectedEdge(vertexTwo, vertexThree);
    expect(edgeTwoThree.length).toEqual(1);
  });

  it('Graph should able to find a path to a Vertex', () => {

    let path = testGraph.pathTo(vertexOne, vertexThree);
    expect(path.get(vertexThree)).toEqual(vertexTwo);
    expect(path.get(vertexTwo)).toEqual(vertexOne);
  });

  it('should be able to retrieve Vertex Children', () => {
    let neighbors  = testGraph.getNeighbors(vertexOne);
    expect(neighbors.length).toEqual(1);
    console.log(neighbors);
    // expect(neighbors.includes(vertexTwo)).toBeTruthy();
  });
});
