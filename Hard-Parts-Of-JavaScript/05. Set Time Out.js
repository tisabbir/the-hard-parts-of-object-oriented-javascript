function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 0);
console.log("Me first!");

setTimeout(printHello, 10)

console.log('Me third');
