function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);

console.log(user1.score);
user1.increment();
console.log(user1.score);