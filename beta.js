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

var maxProfit = 0;
var currProfit = 0;
var maxBuy;
var maxSell;

BinarySearchTree.prototype.dfs = function(currKey, buy, sell, currProfit, maxProfit) {
    values = values || [];
    if (!currKey){
      currKey = this.key
    }

    if(currProfit > maxProfit || !maxProfit){
      maxProfit = currProfit;
      maxBuy = buy;
      maxSell = sell;
    }

    if (this.left) {
        currProfit = -(currKey) + this.left.key;
        values = this.left.dfs(currKey, this.key, this.left.key, currProfit, maxProfit);
    } else if (this.right) {
      currProfit = -(this.key) + this.right.key;
      values = this.right.dfs(values, this.key, this.right.key, currProfit, maxProfit);
    }
    else{
      this.dfs
    };
};

BinarySearchTree.prototype.bfs = function(values) {
    values = values || [];
    var max = 0;
    var buy = [];


    var queue = [this];

    while (queue.length) {
        var node = queue.shift();

        values.push(node.key);

        if (node.left) {

            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }

    }

    values.sort(function(a, b){
      return a - b;
    });
    console.log(values);

    while(values.length){
      buy.push([values.shift(),values.pop()]);

    }

    console.log(buy);

    return buy;
};


var newTree= new BinarySearchTree();

var array = [128,97,121,123,98,97,105];

array.forEach(function(index,num){
    newTree.insert(index,num);
});

console.log(newTree);
console.log(newTree.dfs());
