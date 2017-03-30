var BinarySearchTree = function(key, value, parent) {
    this.key = key || null;
    this.value = value || null;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
};

BinarySearchTree.prototype.insert = function(key, value) {
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }
    else if (key < this.key) {
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        else {
            this.left.insert(key, value);
        }
    }
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
};

BinarySearchTree.prototype.checkBST = function() {
    var currentNode = this;

    if(currentNode.left || currentNode.right){
      if(currentNode.left > this || currentNode.right < this){
        return false;
      }
    }
    else {
        currentNode.left.checkBST();
        currentNode.right.checkBST();
    }
      console.log("Tree is a BST");
};


var leftHeight = 0;
var rightHeight = 0;
var maxHeight= 0;

BinarySearchTree.prototype.checkLeft = function() {
  var currNode = this;
  if(currNode.left){
    if(currNode.left.left == undefined && currNode.left.right == undefined){
        currNode = currNode.right;
        leftHeight++;
        currNode.checkHeight();
      } else if (!currNode.right){
            leftHeight++;
            currNode.left.checkLeft();
         }

  }   else if (currNode.right) {
       leftHeight++;
       currNode.right.checkLeft();
     }

      return leftHeight;

};

BinarySearchTree.prototype.checkRight = function() {
  var currNode = this;
  if(currNode.right){
    if(currNode.right.left == undefined && currNode.right.right == undefined){
        currNode = currNode.left;
        rightHeight++;
        currNode.checkHeight();
      } else if(!currNode.left) {
        rightHeight++;
        currNode.right.checkRight();
      }

  } else if (currNode.left) {
   rightHeight++;
   currNode.left.checkRight();
 }

  return rightHeight;


};

BinarySearchTree.prototype.checkHeight = function() {

    var left = this.left.checkLeft();
    var right = this.right.checkRight();

      if(leftHeight > rightHeight){
        return leftHeight;
      } else {
        return rightHeight;
      }

};

BinarySearchTree.prototype.dfs = function(values) {
    values = values || [];
    if (this.left) {
        values = this.left.dfs(values);
    }
    values.push(this.key);

    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
};


var newTree= new BinarySearchTree();

var array = [8,3,1,6,4,7,10,14,13];

for(var i = 0; i < array.length; i++){
  newTree.insert(array[i], i);
}

//console.log(newTree);
console.log(newTree);
console.log(newTree.dfs());
