class UserCreator { // function + object combination
    constructor (name, score) { // the function part
        this.name = name,
        this.score = score
    }

    // the object part
    
    // the object.prototype part
  increment () { // the increment function is stored in the UserCreator.prototype object
        this.score++
    }
}

const user1 = new UserCreator('Tim', 5); // new class automates the hard works 
//1. create a this object
//2. link the this object with userCreator.object
//3. return the this object

console.log(user1.name);
console.log(user1.score);
user1.increment();
console.log(user1.score);

console.log(UserCreator.prototype.increment); 