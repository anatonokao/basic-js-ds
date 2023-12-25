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
    if (!this.tree) {
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
    let current = this.tree;
    let prev = null;

    while (current) {
      // если текущий нод, тот который надо удалить
      if (current.data === data) {
        // если у нода нет детей
        if (!current.left && !current.right) {
          if (!prev) this.tree = null;
          else prev.left === current ? (prev.left = null) : (prev.right = null);
          break;
        }

        // если у нода один ребенок
        if (!current.left) {
          if (!prev) this.tree = current.right;
          else
            prev.left === current
              ? (prev.left = current.right)
              : (prev.right = current.right);
          break;
        }
        if (!current.right) {
          if (!prev) this.tree = current.left;
          else
            prev.left === current
              ? (prev.left = current.left)
              : (prev.right = current.left);
          break;
        }

        // если у нода два ребенка
        if (!current.right.left) {
          if (!prev) {
            this.tree.data = current.right.data;
            this.tree.right = current.right.right;
          } else {
            if (prev.left === current) {
              prev.left.data = current.right.data;
              prev.left.right = current.right.right;
            } else {
              prev.right.data = current.right.data;
              prev.right.right = current.right.right;
            }
          }
          break;
        }
        let minNode = current.right.left;
        let prevMinNode = current.right;
        while (minNode.left) {
          prevMinNode = minNode;
          minNode = minNode.left;
        }
        current.data = minNode.data;
        prevMinNode.left = minNode.right || null;
        break;
      }

      // если текущий нод не тот
      prev = current;
      if (current.data > data) current = current.left;
      else current = current.right;
    }
  }

  min() {
    if (!tree) return null;

    let current = this.tree;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!tree) return null;

    let current = this.tree;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();

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

tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(14));
console.log(tree.has(8));
console.log(tree.has(9));
console.log(tree.has(2));
console.log(tree.has(6));
console.log(tree.has(128));
console.log(tree.has(31));
console.log(tree.has(54));
console.log(tree.has(1));
