// Solution 2: Using the prototype chain
//  Store the increment function in just one object and have the interpreter, if it 
// doesn't find the function on user1, look up to that object to check if it's there
//  Link user1 and functionStore so the interpreter, on not finding .increment,  makes 
// sure to check up in functionStore where it would find it
//  Make the link with Object.create() technique