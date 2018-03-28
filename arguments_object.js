

function findMax() {
  console.log('------');
  console.log('arguments: ' + JSON.stringify(arguments));
  console.log(typeof arguments);
  var max = arguments[0];
  // console.log(max);
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
    // console.log(arguments[i]);
    // console.log(max);    
  }
  // console.log(max);
  return max;
}

console.log(findMax([2,5,3])); // [2,5,3]

console.log(findMax([])); // []

console.log(findMax(null)); // null

console.log(findMax()); // undefined 

console.log(findMax(2,5,3)); // 5

console.log(findMax.call(null, 2,5,3)); // 5

console.log(findMax.apply(null, [2,5,3])); // 5

// console.log(findMax.apply(null, 2,5,3)); // error


