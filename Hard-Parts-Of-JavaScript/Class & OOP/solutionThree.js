function userCreator(name, score){

    // automate this : const newUser = Object.create(userFunctionStore);
    //1. create an object
    //2. link proto reference with userCreator.prototype object [every function is a function + object. where the object has a property "prototype" which is an empty object]
    this.name = name,
    this.score = score
    //automate this : return newUser;
    //3. return the object
}

userCreator.prototype.increment = function () {this.score++};

const user1 = new userCreator('Tim', 5);

console.log(user1.name);
console.log(user1.score);
user1.increment();
console.log(user1.score);