// Tutorial on this keyword

/*
-Implicit Binding
-Explicit Binding
-New Binding
-Window Binding
*/

// Implicit Binding
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

// explicit binding

var sayname = function() {
  console.log('my name is ' + this.name);
};

var stacey = {
  name: 'Stacey',
  age: 34,
};

sayName.call(stacey);
