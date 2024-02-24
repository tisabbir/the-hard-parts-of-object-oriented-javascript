function userCreator(name, score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const user1 = userCreator('Sabbir', 5);
console.log(user1.name);