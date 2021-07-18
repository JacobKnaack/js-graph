'use strict';

const Vertex = require('./Vertex.js');


/**
 * Creates a new Vertex in the adjacency list
 * `this` is inherited from the constructor on instantiation
 * @param {any} value - some value to be stored in the Graph
 * @returns {Map} - the adjacencyList map that we are using to store values
 */

module.exports = function (value) {
  if (value === undefined || value === null || !this.adjacencyList) {
    throw new Error('Error: could not add value to Graph, make sure it has been instantiated, and argument is not `null` or `undefined`');
  }
  
  let vertex = new Vertex(value);
  this.adjacencyList.set(vertex, []);
  return vertex;
}
