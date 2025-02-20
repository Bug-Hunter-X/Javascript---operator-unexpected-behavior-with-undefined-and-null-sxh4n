function foo(a, b) {
  //Check if a or b are null or undefined and set them to 0 if they are
    a = (a === undefined || a === null)? 0:a;
    b = (b === undefined || b === null)? 0:b;
  return a + b;
}
console.log(foo(5, undefined)); // 5
console.log(foo(5, null)); // 5
console.log(foo(undefined,undefined)); //0
console.log(foo(null,null)); //0