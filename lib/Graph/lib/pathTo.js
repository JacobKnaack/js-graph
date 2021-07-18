'use strict';

/**
 * returns a Map of all edges encountered on a path.
 */
module.exports = function (start, goal) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(start);
    visitedNodes.add(start);

    while (stack.length) {

      const currentNode = stack.pop();

      console.log(currentNode, goal);
      if (currentNode === goal) {
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {

        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }

        stack.push(neighborNode);

        parentPath.set(neighborNode, currentNode);

      }
    }
  }
