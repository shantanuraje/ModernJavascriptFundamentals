// alert("Hello world");
//Logging different datatypes
console.log("Logging different datatypes");
console.log(123);
console.log(true);
var greeting = "Hello World";
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error("Error!");
console.warn("Warn!");
//console.clear() clears console
//Timing stuff - multiply numbers upto 100
console.time('Start - multiply numbers upto 100');
var prod = 1;
for (let i = 1; i <= 500; i++) {
  prod = prod * i;
  console.log(prod);  
}
console.timeEnd('End' + prod);