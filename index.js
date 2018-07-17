for (let num = 1; num < 200; num++) {
    const output = [];
    if (num % 3 == 0) {
        output.push("Fizz");
    }
    if (num % 5 == 0) {
        output.push("Buzz");
    }
    if (num % 7 == 0) {
        output.push("Bang");
    }
    if (num % 11 == 0) {
        output.length = 0
        output.push("Bong");
    }
    if (num % 13 == 0) {
        if (num % 3 == 0) {
            output.splice(1, 0, "Fezz");
        } else {
            output.unshift("Fezz");
        }
    }
    if (output.length < 1) {
        output.push(num);
    }
    console.log(output.join(''));
}