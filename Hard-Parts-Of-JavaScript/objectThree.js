const user3 = Object.create(null);
 user3.name = "Eva";
 user3.score = 9;
 user3.increment = function() {
  user3.score++;
 };


 user3.increment();
 console.log(user3.score);