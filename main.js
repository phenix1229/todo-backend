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

const getTodoName = (todo => todo.text)

const getCompleteness = (todo => todo.complete)

const getPriority = (todo => todo.priority)

const isComplete = (todo => todo.complete)

const isHighPriority = (todo => todo.priority === 2)



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = todo => todo.map(getTodoName)

const namesAndPriorities = todo => todo.map(item => isHighPriority(item) ? (`${getTodoName(item)} - High`) : (`${getTodoName(item)} - Low`))

const justNotComplete = todo => todo.filter(item => !isComplete(item))

const justComplete = todo => todo.filter(item => isComplete(item))

const priority2Only = todo => todo.filter(item => isHighPriority(item))

const priority1Only = todo => todo.filter(item => !isHighPriority(item))

const notCompleteFirst = todo => {
  const newArr = [];
  todo.forEach(item => !isComplete(item) ? newArr.unshift(item) : newArr.push(item));
  return newArr;
}

const priority2First = todo => {
  const newArr = [];
  todo.forEach(item => isHighPriority(item) ? newArr.unshift(item) : newArr.push(item));
  return newArr;
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