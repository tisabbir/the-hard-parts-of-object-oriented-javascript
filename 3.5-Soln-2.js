function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);

    // The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

    newUser.name = name;
    newUser.score = score;
    return newUser;
   };

   const userFunctionStore = {
    increment: function(){this.score++;},
    login: function(){console.log("You're loggedin");},
    hello : function(){console.log(`Hello ${this.name}`)}
   };

   const user1 = userCreator("Phil", 4);
   const user2 = userCreator("Julia", 5);
   user1.increment()
    user1.hello()