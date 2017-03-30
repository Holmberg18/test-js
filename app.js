var LinkedList = function() {
    this.length = 0;
    this.head = null;
};

LinkedList.prototype.insert = function(index, value) {
    if (index < 0 || index > this.length) {
        throw new Error('Index error');
    }

    var newNode = {
        value: value
    };

    if (index == 0) {
        newNode.next = this.head;
        this.head = newNode;
    }
    else {
        // Find the node which we want to insert after
        var node = this._find(index - 1);
        newNode.next = node.next;
        node.next = newNode;
    }

    this.length++;
};

LinkedList.prototype._find = function(key) {
    var node = this.head;
    while(node != null){
        if(node.value.key == key){
          return node.value;
        }
        node = node.next;
      }
};



var HashMap = function(initialCapacity) {
    this.length = 0;
    this._slots = this.buildChains(initialCapacity);
    this._capacity = initialCapacity || 8;
    console.log(this._slots);
    //this.buildChains();
};
HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;


HashMap.prototype._hashString = function(string) {
    var hash = 5381;
    for (var i=0; i<string.length; i++) {
        hash = (hash << 5) + hash + string.charCodeAt(i);
        hash = hash & hash;
    }
    return hash >>> 0;
};

HashMap.prototype._resize = function(size) {
    var oldSlots = this._slots;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._slots = this.buildChains(size);
    for (var i=0; i<oldSlots.length; i++) {
        var slot = oldSlots[i];
        if (slot !== undefined) {
            this.set(slot.key, slot.value);
        }
    }
};

HashMap.prototype.set = function(key, value) {
    var loadRatio = (this.length + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
        this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    var list = this._findSlot(key);

    var check = list._find(key);

    if(check == undefined){
      list.insert(0, {key,value});
    }
    else {
      check.value = value;
    }
    //this.length++;
};

HashMap.prototype.buildChains = function(capacity){
 var array = []
  for(var i = 0; i < capacity; i++){
    array.push(new LinkedList());
    }
 return array;
};


HashMap.prototype._findSlot = function(key) {
    var hash = this._hashString(key);
    var start = hash % this._capacity;

        var index = i % this._capacity;
        return this._slots[index];


};

HashMap.prototype._palindrome = function(){
  var temp = this._slots[this.length];
  var palindrome = true;
  // // console.log(temp);
  // var currHash = this;
  // //
  // var value = currHash._slots[1].value;
  // // console.log(value);
  //
  //
    for(var i = 0; i < this.length; i++){
      reverseHash.set(i, this._slots[this.length - i]);
    }
    console.log("reverseHash is ", reverseHash);
    for(var i = 1; i < this.length; i++){
      var reverse= reverseHash._slots[i].value;
      var curr = currHash._slots[i].value;
      if(reverse.value != curr){
        palindrome = false;
        return palindrome;
      }
    }
    return palindrome;

};

HashMap.prototype._anagram = function(stringGroup){

  var words = stringGroup;
  var anagramGroup = []
  var i = 0;
  while(i < words.length){
    anagramGroup = [];
    var word = words[i];
    var alphabetical = word.split("").sort().join("");
    anagramGroup.push(word);

    for(var j = i; j < words.length; j++){
      if (i === j) {
        continue;
      }

      var other = words[j];
      if(alphabetical === other.split("").sort().join("")){
        anagramGroup.push(other);
        console.log("the ana group is now: ",anagramGroup);
      }

    }
      this.set(i,anagramGroup);
      console.log(this);
    //  console.log(this._slots.value.length);
      i += anagramGroup.length;

  }

};

//var stringHash = new HashMap(10);
//console.log(stringHash);
 var newHash = new HashMap(10);
 var newString = "civic";


//
 for(var i = 0; i < newString.length; i++){
   newHash.set(i, newString[i]);
 }

 console.log(newHash);
