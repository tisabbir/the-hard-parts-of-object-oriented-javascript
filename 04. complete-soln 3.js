function UserCreator(name, score){
 this.name = name;
 this.score = score;
}
UserCreator.prototype.increment = function(){
 this.score++;
};
UserCreator.prototype.login = function(){
 console.log("login");
};
const user1 = new UserCreator(“Eva”, 9)
user1.increment()