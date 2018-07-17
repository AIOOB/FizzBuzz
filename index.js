for (let num = 1; num < 100; num++) {
    var output = [];
    if (num % 3 == 0) {
        output.push("Fizz");
    }
    if (num % 5 == 0) {
        output.push("Buzz");
    }
    if (num % 7 == 0) {
        output.push("Bang")
    }
    if (output.length < 1) {
        output.push(num);
    }
    console.log(output.join(''));
}