/*
FUNCTIONAL PROGRAMMING
- PURE FUNCTIONS
- COMPOSITION
- IMMUTABILITY
- CLOSURE
- RECURSION
- LIST TRANSFORMATION (MAP)
- LIST EXCLUSION (FILTER)
- LIST COMPOSITION (REDUCE)
- LIST ITERATION (forEach)



SIDE EFFECTS - CHANGING THE STATE OF A PROGRAM BY INDIRECT MEANS
  - THE MAIN EVIL OF FUNCTIONAL PROGRAMMING
  - If you must have to have an impure function - do not make it public, wrap it in another function
*/


//IMPURE EXAMPLE - EVERY TIME YOU CALL FOO, IT CHANGES TO OUTPUT
function foo(x) {
  y = x * 2;
  z = x * 3;
}

var y = 2, z = 3;

foo(5);

y; // 10
z; // 15

foo(5); //call again and it changes

y; // 50
z; // 75

// PURE FIX

function bar(x,y,z){
  foo(x);
  return [y,z];  // return multiple values with container

  function foo(x) {
    y = y * x;
    z = y * x;
  }
}

bar(5, 2, 3);    // [10, 15]
bar(5, 10, 15);  // [50, 75]


//IMPURE
function foo(x){
  y++;
  z = x * y;
}

var y = 5
var z;

foo(20);
z;         //120

foo(25);   
z;         //175

//PURE FIX

function bar(x, y){

  var y = 5;
  var z;

  foo(x);
  return [y,z] //only return what has changed/ what you want to show changed

  function foo(x){
    y++;
    z = x * y;
  }
}

bar(20,5);




















