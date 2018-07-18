const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the maximum number you would like: ', (max) => {
    for (let num = 1; num <= max; num++) {
        const output = [];
        pushIfDivisible(output, num, 3, 'Fizz');
        pushIfDivisible(output, num, 5, 'Buzz');
        pushIfDivisible(output, num, 7, 'Bang');
        if (num % 11 === 0) {
            output.length = 0
            output.push('Bong');
        }
        if (num % 13 === 0) {
            if (num % 3 === 0) {
                output.splice(1, 0, 'Fezz');
            } else {
                output.unshift('Fezz');
            }
        }
        if (num % 17 === 0) {
            output.reverse();
        }
        if (output.length === 0) {
            output.push(num);
        }
        console.log(output.join(''));
    }

    rl.close();
});

function pushIfDivisible(array, number, divisor, string) {
    if (number % divisor === 0) {
        array.push(string);
    }
}
