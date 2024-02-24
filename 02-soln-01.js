// Solution 1. Generate objects using a function
function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
    newUser.score++;
    };
    return newUser;
   };
   const user1 = userCreator("Phil", 4);
   const user2 = userCreator("Julia", 5);
   user1.increment()
// console.log(user1s)   

/*
* Problems:
Each time we create a new user we make space in our 
computer's memory for all our data and functions. But 
our functions are just copies
*/ 