'use strict';

/**
 * Our structure for Vertex connections
 */

// Our structure for storing vertices and weights, these are what make up graph lists / matrices
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

module.exports = Edge;
