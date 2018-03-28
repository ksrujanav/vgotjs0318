
/*
  Returns the square of a passed in value.
  @param number 
  @return square of the number
 */
function square(n) {
  if (n === 0) return 0; // boundary - valid
  if (!n || isNaN(n)) return false; // invalid
  return n*n; // valid - all other
}

// -- unit tests

/*
   valid cases: 0, 1, 5, 25, -5 -1
   invalid cases: "hello", false
 */

var testArray = [
  [ [ 0 ], 0 ],
  [ [ -5 ], 25 ],
  [ [ 5 ], 25 ],
  [ [ "hello" ], false ],
  [ [ false ], false ]
];


for (var i = 0; i < testArray.length; i++) {
  
  var testData = testArray[i][0];
  var expectedResult = testArray[i][1];
  
  var actualResult = square.apply(null, testData);
  
  if (actualResult !== expectedResult) {
    
    console.log('FAILED for input: ' + 
                JSON.stringify(testData));
  }
  
}

console.log('DONE');

