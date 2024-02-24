// Method one using {} 
const user1 = {
    name: "Phil",
    score: 4,
    increment: function() {
    user1.score++;
    }
   };
   user1.increment(); //user1.score => 4

//    console.log(user1.score);

// Method Two (.) Notation 
const user2 = {}; //create an empty object
user2.name = "Julia"; //assign properties to that object
user2.score = 5;
user2.increment = function() {
 user2.score++;
};

// console.log(user2);

// Method three
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
 user3.score++;
};

// console.log(user3)


// We are Breaking the DRY Principle