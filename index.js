const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const rules = [];
for (let i = 2; i < process.argv.length; i++) {
    const element = process.argv[i];
    const rule = element.split(":");
    const number = parseInt(rule[0]);
    if (rule.length != 2 || number == NaN) {
        console.log("FizzBuzz takes a space seperated list of divisor:text pairs.");
        process.exit(1);
    }
    rules.push({
        divisor: number,
        text: rule[1],
    });
}

rl.question("What is the maximum number you would like: ", (max) => {
    for (let num = 1; num < max; num++) {
        const output = [];
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i];
            if (num % rule.divisor == 0) {
                output.push(rule.text);
            }
        }
        if (output.length < 1) {
            output.push(num);
        }
        console.log(output.join(''));
    }

    rl.close();
});