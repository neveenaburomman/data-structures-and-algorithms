const  Node = require("./node")


  class BinaryTree {

    constructor(root = null) {

      this.root = root;
    }
    preOrder() {

      let arr = [];

      const traverse= (node) =>{

        arr.push(node.value);

        if (node.left) {
             traverse(node.left)
        }
        if (node.right) {
            traverse(node.right);
      }
    }
        traverse(this.root);
        return arr;
      
    }

    postOrder() {
        let arr = [];

      const traverse= (node) =>{

        if (node.left) {
             traverse(node.left)
        }
        if (node.right) {
            traverse(node.right);
      }
          arr.push(node.value)
    }
        traverse(this.root);
        
        return arr;
      
      }

    inOrder() {

      let arr = [];

     const traverse= (root) =>{

        if (root.left) {
            traverse(root.left)
        }
        arr.push(root.value);

        if (root.right) {
            traverse(root.right)
        }
      }
        traverse(this.root);
        return arr;
      }  
}

class BinarySearchTree extends BinaryTree {

    constructor(root = null) {
      super(root);
    }

    add(value) {

        let newNode = new Node(value);

        if (this.root === null) {
          this.root = newNode;
          return this.root;
        }

        let traverse = (node) => {

          if (node.value < value) {

            if (node.value < value) {
                if (node.right) {
                  walk(node.right);
                } else {
                  node.right = newNode;
                }

          } else if (node.value > value) {
            if (node.left) {
              walk(node.left);
            } else {
              node.left = newNode;
            }
          }
        };
        traverse(this.root);
        return this.root;
      }
      
    }
    contains(value) { 

         if (this.root === null){
        return false;
         }

     let current = this.root;

    while (current) {

        if (current.value === value) {
            return true;
        }
        else if (value < current.value) {
            current = current.left;
        }

        else if  (value > current.value) {
            current = current.right;
        }

    }
    return false
}

    
  }

  const breadthFirst =(tree)=> {

    let queue = [];
    let result = [];

    if (tree.root) {

      queue.push(tree.root);

      while (queue.length) {

        let node = queue.shift();
        result.push(node.value);
  
        if (node.left){
           queue.push(node.left);
        }
        if (node.right){
           queue.push(node.right);
      }
      
    } 
    return result;
  }
}
  





  module.exports ={
    BinaryTree,
    BinarySearchTree,
    breadthFirst
  };
