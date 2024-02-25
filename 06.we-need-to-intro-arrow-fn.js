function UserCreator(name, score){
    this.name = name;
    this.score = score;
   }
   UserCreator.prototype.increment = function(){
    const add1 = () => {this.score++};
    // const add1 = function(){this.score++;}
    add1()
   };
   UserCreator.prototype.login = function(){
    console.log("login");
   };
   const user1 = new UserCreator('Eva', 9);
   console.log(user1.score);
   user1.increment()
   console.log(user1.score);