<html>
<head></head>
<body>
<script>

var x = 10;
var y = 20;


// prod1 function allows context override
function prod1() {
  console.log(this.x * this.y);
}

// prod2 function does not allow context override
function prod2() {
  console.log(x * y);
}


prod1();
prod2();

var obj = {
				x : 400, 
				y : 1000
			}

			
prod1.call(obj);
prod2.call(obj);

console.log("************")

prod1.call(null);
prod2.call(null);

</script>
</body>
</html>