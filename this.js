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

var sayname = function(lang1, lang2, lang3) {
  console.log('my name is ' + this.name + lang1, + lang2 + lang3);
};

var stacey = {
  name: 'Stacey',
  age: 34,
};

var languages = ['Javascript', 'Ruby', 'Python'];


sayName.call(stacey, languages[0], languages[1], languages[2]);

var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);// returns a new function

sayName.apply(stacey, languages)









// new binding
var Animal = function(name, name, type) {
  //this = {}
  this.color = color
  this.name = name
  this.type = type
}


// window binding
var sayAge = function() {
  console.log(this.age);
};

 var me = {
   age: 25
 };
 
