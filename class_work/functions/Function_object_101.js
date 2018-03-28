var f = new Function('a', 'b', 'c', 
                     'var max=a; if (b > max) { max=b; } if (c > max) { max=c; } return max;');

console.log(f.toString());
console.log("\n");
console.log(f.call(null, 3, 5, 4));
console.log("\n");


