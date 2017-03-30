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


BinarySearchTree.prototype.thirdLargest = function() {
  var currNode = this;
  var third = new BinarySearchTree(0);
  var second = new BinarySearchTree(0);
  var first = new BinarySearchTree(0);

  //find first
  while(currNode.right){
    first = currNode.right
    currNode = currNode.right;
  }

  //find second
  currNode = this.right;

  while((currNode.right || currNode.left) || (currNode.right == null && currNode.left == null)){
    if(currNode.key < first.key && (currNode.key > second.key)){
      second = currNode;
      if(currNode.left == null && currNode.right == null){
        break;
      }
    }
    if(currNode.right){
      currNode = currNode.right;
    } else {
      currNode = currNode.left;
    }
  }

  currNode = this.right;

  while((currNode.right || currNode.left) || (currNode.right == null && currNode.left == null)){
    if(currNode.key < first.key && currNode.key < second.key){
      third = currNode;
      if(currNode.left == null && currNode.right == null){
        break;
      }
    }
    if(currNode.right){
      currNode = currNode.right;
    } else if (currNode.left) {
      currNode = currNode.left;
    } else {
      break;
    }
  }

  return third;

};

var newTree= new BinarySearchTree();

var array = [8,3,1,6,4,7,10,14,13];

array.forEach(function(index,num){
    newTree.insert(index,num);
});

console.log(newTree.thirdLargest());
