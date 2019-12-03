/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function(arr, func) {
  const newArr = [];
  arr.forEach(item => newArr.push(func(item)));
  return newArr;
}

const filter = function(arr, func) {
  const newArr =[];
  arr.forEach(item => func(item) === true ? newArr.push(item) : '');
  return newArr;
}

const twoPileSort = function(arr, func) {
  const newArr = [];
  arr.forEach(item => func(item) === true ? newArr.unshift(item) : newArr.push(item));
  return newArr;
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text;
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const isComplete = function(todo) {
  return todo.complete;
}

const isHighPriority = function(todo) {
  return todo.priority === 2
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(todo) {
  newArr = [];
  ;
  return newArr;
}

const namesAndPriorities = function(todo) {
  
}

const justNotComplete = function() {
  
}

const justComplete = function() {
  
}

const priority2Only = function() {
  
}

const priority1Only = function() {
  
}

const notCompleteFirst = function() {
  
}

const priority2First = function() {
  
}



module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}