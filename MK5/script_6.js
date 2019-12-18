// Реализуйте Iterator для графа. Пример графа:
/*
class Node {
  constructor() {
    this.id = Node.idCounter++;
    this.nodes = [];
  }

  static setConnection(a, b) {
    if (!a.nodes.includes(b)) {
      a.nodes.push(b);
    }

    if (!b.nodes.includes(a)) {
      b.nodes.push(a);
    }
  }
}

Node.idCounter = 1;

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    if (!this.nodes.includes(node)) {
      this.nodes.push(node);
    }
  }

  getNodeById(id) {
    for (const node of this.nodes) {
      if (node.id === id) {
        return node;
      }
    }
  }
}

const graph = new Graph();

for (let i = 0; i < 10; i++) {
  graph.addNode(new Node());
}

for (const [id1, id2] of [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 8],
  [8, 9],
  [9, 10],
  [3, 5],
  [2, 9]
]) {
  Node.setConnection(graph.getNodeById(id1), graph.getNodeById(id2));
}
*/
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////