const user3 = Object.create(null);
 user3.name = "Eva";
 user3.score = 9;
 user3.increment = function() {
  user3.score++;
 };

 console.log(user3);