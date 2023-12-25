const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  tree = null;

  root() {
    return this.tree;
  }

  add(data) {
    if (!this.tree?.data) {
      this.tree = new Node(data);
      return;
    }

    function addToNode(node) {
      if (node.data > data) {
        if (!node.left) {
          node.left = new Node(data);
          return;
        }
        addToNode(node.left);
      }

      if (node.data < data) {
        if (!node.right) {
          node.right = new Node(data);
          return;
        }
        addToNode(node.right);
      }
    }

    addToNode(this.tree);
  }

  has(data) {
    function checkTree(node) {
      if (!node) return false;
      if (node.data === data) return true;
      if (node.left?.data === data || node.right?.data === data) return true;
      if (node.data < data) return checkTree(node.right);
      if (node.data > data) return checkTree(node.left);
      return false;
    }
    return checkTree(this.tree);
  }

  find(data) {
    function findNode(node) {
      if (!node) return null;
      if (node.data === data) return node;
      if (node.data < data) return findNode(node.right);
      if (node.data > data) return findNode(node.left);
      return null;
    }
    return findNode(this.tree);
  }

  remove(data) {
    // let current = this.tree;
    // let prev = null;

    // while(current) {
    //   if (current.data === data) {
         
    //   }
      
    // }
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

// const tree = new BinarySearchTree();

// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);

// // console.log(tree.root());
// console.log("res", tree.find(54));
// console.log("res", tree.find(8));
// console.log("res", tree.find(7));
// console.log("res", tree.find(4));
// // tree.has(8);
// // tree.has(7);
// // tree.has(4);

// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(4);
// tree.add(32);
// tree.add(12);
// tree.add(14);
// console.log(tree.find(8));
// console.log(tree.find(2));
// console.log(tree.find(32));
// console.log(tree.find(14));
