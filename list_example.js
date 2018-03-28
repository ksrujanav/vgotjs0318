

function findMax(list) {
  console.log('------');
  console.log('list: ' + JSON.stringify(list));
  console.log(typeof list);
  var max = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] > max) max = list[i];
  }
  return max;
}


console.log(findMax([2,5,3])); // 5

console.log(findMax([])); // undefined

// console.log(findMax(null)); // error

// console.log(findMax()); // error

console.log(findMax(2,5,3)); // undefined






