const copyArrayAndManipulate = (array, instructions) =>{
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(instructions(array[i]));
    }
    return output;
}

const result = copyArrayAndManipulate([1,2,3], input => input *2); // it resembles map method 

console.log(result);