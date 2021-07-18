'use strict';

const Edge = require('./Edge.js');


module.exports = function (start, end, weight = 0) {
  if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
    throw new Error('__ERROR__ Invalid Nodes');
  }

  const adjacencies = this.adjacencyList.get(start);

  adjacencies.push(new Edge(end, weight));
  return adjacencies;
}
