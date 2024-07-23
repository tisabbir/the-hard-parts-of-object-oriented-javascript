function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    return counter;
  }
  return incrementCounter;
}
const myNewFunction = outer();

// console.log(myNewFunction);

console.log(myNewFunction()); //1
console.log(myNewFunction()); //2
console.log(myNewFunction());//3
console.log(myNewFunction()); //4

const anotherFunction = outer();
console.log(anotherFunction()); //1
console.log(anotherFunction()); //2

console.log(myNewFunction()); //5
console.log(anotherFunction()); //3