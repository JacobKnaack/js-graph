'use strict';

const addVertex = require('./lib/addVertex.js');
const addDirectedEdge = require('./lib/addDirectedEdge.js');
const pathTo = require('./lib/pathTo.js');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex = addVertex;
  addDirectedEdge = addDirectedEdge;
  pathTo = pathTo;

  /**
   * Get an array of all Vertices that are connected to a particular vertex.
   * @param {*} vertex 
   * @returns {array} - the array containing all edges for that vertex.
   */

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ invalid vertex', vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }

  /**
   * Our traversal method that uses a queue.
   */
  breadthFirst(node) {

    const queue = [];
    const visitedNodes = new Set(); // javascript object that functions much like and array, but only stores unique values.

    queue.push(node);
    visitedNodes.add(node);

    while (queue.length) {
      let current = queue.shift();

      console.log(current);

      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        const vertex = neighbor.vertex;

        if (visitedNodes.has(vertex)) {
          continue;
        } else {
          visitedNodes.add(vertex);
        }
        queue.push(vertex);
      }
    }

    return
  }

  /**
   * Our traversal method that utilizes a stack
   */
  depthFirst(node) {

    const stack = [];
    const visitedNodes = new Set();

    stack.push(node);
    visitedNodes.add(node);

    while (stack.length) {

      const current = stack.pop();

      console.log(current);

      const neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        const childVertex = edge.vertex;

        if (visitedNodes.has(childVertex)) {
          continue;
        } else {
          visitedNodes.add(childVertex);
        }
        stack.push(childVertex);

      }
    }

    return;
  }
}

module.exports = Graph;
