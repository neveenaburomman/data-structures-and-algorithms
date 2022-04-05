"use strict"

function treeFizzBuzz(tree) {

    const traverse  = (node) => {

        if(node.value % 15 === 0) {
          node.value = 'FizzBuzz';
        }
         
       
        else if (node.value % 5 === 0) {
             node.value = 'Buzz'; 
          }
        else if (node.value % 3 === 0) {
          node.value = 'Fizz';
        }
        else{
          node.value=node.value.toString();
        }
        if (node.left) { 
          traverse (node.left); 
        }
  
        if (node.right) { 
            traverse (node.right); 
          }
      };
    
      traverse (tree.root);
    
      return tree;
    }

module.exports= treeFizzBuzz;
