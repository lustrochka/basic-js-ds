const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.base = null;
  }

  root() {
    return this.base
  }

  add(data) {
    this.base = addNode(this.base, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }
  

  has(data) {
    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchNode(node.left, data)
      } else {
        return searchNode(node.right, data)
      }
    }
    return searchNode(this.base, data);
  }

  find(data) {
    function search(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return search(node.left, data)
      } else {
        return search(node.right, data)
      }
    }
    return search(this.base, data);
  }

  remove(data) {
    this.base = removeNode(this.base, data);

    function removeNode(node, data) {
      if (node == null) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          node = node.right;
          return node;
        }
        if (node.right == null) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left != null) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    let node = this.base;
    while (node.left) {
      node = node.left
    }
    return node.data;
  }

  max() {
    let node = this.base;
    while (node.right) {
      node = node.right
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};