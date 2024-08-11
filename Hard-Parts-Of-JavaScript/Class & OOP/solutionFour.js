class UserCreator {
    constructor (name, score) {
        this.name = name,
        this.score = score
    }

  increment () {
        this.score++
    }
}

const user1 = new UserCreator('Tim', 5);

console.log(user1.name);
console.log(user1.score);
user1.increment();
console.log(user1.score);