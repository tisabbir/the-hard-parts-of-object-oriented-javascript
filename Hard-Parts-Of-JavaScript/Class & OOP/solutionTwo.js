function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
}

const userFunctionStore = {
    increment : function (){this.score++}
}