'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine().trim(), 10);

    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const firstName = firstMultipleInput[0];

        const emailID = firstMultipleInput[1];
    }
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let n;

rl.on('line', (line) => {
    inputLines.push(line);
    if (inputLines.length === 1) {
        n = parseInt(line);
    } else if (inputLines.length === n + 1) {
        rl.close();
    }
});

rl.on('close', () => {
    const gmailUsers = [];

    for (let i = 1; i <= n; i++) {
        const [firstName, email] = inputLines[i].split(' ');
        if (email.endsWith('@gmail.com')) {
            gmailUsers.push(firstName);
        }
    }

    gmailUsers.sort();

    gmailUsers.forEach(name => console.log(name));
});
