/**
 * What if we want to confirm our user1 has the property 
score
 We can use the hasOwnProperty method - but where is it? Is it on user1? 
All objects have a __proto__ property by default which defaults to linking to a big 
object - Object.prototype full of (somewhat) useful functions
 We get access to it via userFunctionStore’s __proto__ property - the chain
 * */ 