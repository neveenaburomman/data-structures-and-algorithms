'use strict';
const Node =require("./node");

class kArryTree{
    constructor(root=null){
      this.root = root;
    }}

function treeFizzBuzz(tree) {

  const traverse  = (Node) => {

    if(Node.value % 15 === 0) {
      Node.value = 'FizzBuzz';
    }
    else if (Node.value % 5 === 0) {
      Node.value = 'Buzz';
    }
    else if (Node.value % 3 === 0) {
      Node.value = 'Fizz';
    }
    else{
      Node.value=Node.value.toString();
    }
    //console.log(Node.children)
    for(let i=0;Node.children.length>i;i++){
      traverse (Node.children[i])
    for(let j=0;Node.children[i].children.length>j;j++){  
      
    if (Node.children[i].children[j]) {
     // console.log(Node.children[i].children[j])
      traverse (Node.children[i].children[j]);
      } 
    } }}
  traverse (tree.root);
  return tree;
}
////////////
Node
      // let tree2= new karryTree();
      // tree2.root =new Node(15);
      // let root =tree2.root;
      /* root.children.push(new Node(3));
       root.children.push(new Node(5));
       root.children.push(new Node(9));
       root.children[0].parent=root.value;
       root.children[1].parent=root.value;
       root.children[2].parent=root.value;
       root.children[0].children.push(new Node(2));
       root.children[0].children.push(new Node(4));
       root.children[0].children[0].parent=root.children[0].value;
       root.children[0].children[1].parent=root.children[0].value;
     //  console.log(tree2)*/

       

//treeFizzBuzz(tree2);

//console.log(tree2.root);
//console.log(tree2.root.children[0].children);


module.exports= {kArryTree,treeFizzBuzz,};

