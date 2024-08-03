'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// Generic function to print array elements
function printArray<T>(arr: T[]): void {
    arr.forEach(element => console.log(element));
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    
    // Read and print integer array
    const intArray: number[] = [];
    for (let i = 0; i < n; i++) {
        intArray.push(parseInt(readLine().trim(), 10));
    }
    printArray(intArray);

    const m = parseInt(readLine().trim(), 10);

    // Read and print string array
    const strArray: string[] = [];
    for (let i = 0; i < m; i++) {
        strArray.push(readLine().trim());
    }
    printArray(strArray);
}
