//Original array
let numbers = [4, 9, 16, 25];

//Performing map method
let sub = numbers.map(sunstone);

function sunstone() {
    return numbers.map(Math.sqrt);
}

console.log(sub);
