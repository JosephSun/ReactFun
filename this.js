// Tutorial on this keyword

/*
-Implicit Binding
-Explicit Binding
-New Binding
-Window Binding
*/

// Where is this function invoked?
var me = {
  name: 'joseph',
  age: 25,
};

var you = {
  name: 'Joey',
  age: 21,
}

var saynameMixin = function(obj) {
  obj.sayName = function() {
    console.log(this.name);
  }
};
