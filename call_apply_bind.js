
/*

Scope is creation scope and run time scope
Creation scope is global,local,closure scope

Runtime scope comes from (creation scope + context)
Context can be changed using call, apply, bind provided
context is referred in the implementation using 'this'

*/




// scope identifies the symbols that are accessible

// context identifies which object data is this 
// method bound to



function findGreatest(a, b, c) {
  
  var max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
  
}


var x = findGreatest(5, 7, 6); // x = 7

var x = findGreatest.call(null, 5, 6, 7); // x = 7
var x = findGreatest.apply(null, [ 5, 6, 7 ]); // x = 7
var x = findGreatest.bind(null, 5, 6, 7); // x = copy of findGreatest
console.log(`x= ${x}`);

var y = x();
console.log("y= " , y);


/*

 f(params);
 
 f.call(null, list of params); => call f with params

 f.apply(null, array of params); => call f with params (as array)
 
 f.bind(null, list of params); => creates a new copy of f with params,
                                  bind does not invoke the function f

*/





