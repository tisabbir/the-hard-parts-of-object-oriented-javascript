function userCreator (name, score){
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function(){
    this.score++;
};

userCreator.prototype.login = function(){
    console.log('logged in');
}

const user1 = new userCreator('sabbir', 10);
console.log(user1.score);
user1.increment();
console.log(user1.score);