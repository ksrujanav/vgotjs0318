
function someTest1(arr) {
  if (!arr) return; // defensive
  console.log(arr.length);
  
}

// --- falsy test - checks for invalid value
// if (!x) 
// same as 
// if (x === undefined || x === null)


// --- truthsy test - checks for valid value
// if (x) 
// same as 
// if (x !== undefined && x !== null)


function someTest2(num) {
  if (!num) return; // defensive programming
  console.log(num.toString());
}


function someFunc() {
  console.log('--------');
  console.log(arguments.length + ' params,\nthey\'re:');
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }  
}

someTest2(); // undefined
someTest2(null);  
someTest2(3);

someTest1([]);
someTest1([1,3,5]);
someTest1(null); // exception: null

someFunc([]);
someFunc(1,3,5);
someFunc([1,3,5]);
someFunc(null); // exception: null




