//js
class Difference{
    constructor(a){
        this.a = a;
    }
    computeDifference() {
        return Math.max(this.a) - Math.min(this.a);
    }
}

const p1 = new Difference([1, 2, 5]);
maximumDifference = p1.computeDifference();
console.log(maximumDifference);

//typescript 
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;
// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';
//     main();
// });

// function readLine(): string {
//     return inputLines[currentLine++];
// }

// function main() {
//     // Enter your code here
//    let n: number = parseInt(readLine().trim(), 10);
//     let elements: number[] = readLine().split(' ').map(Number);

//     class Difference {
//         private elements: number[];
//         public maximumDifference: number;

//         constructor(elements: number[]) {
//             this.elements = elements;
//         }

//         computeDifference(): void {
//             let minElement = Math.min(...this.elements);
//             let maxElement = Math.max(...this.elements);
//             this.maximumDifference = maxElement - minElement;
//         }
//     }

//     let diff = new Difference(elements);
//     diff.computeDifference();
//     console.log(diff.maximumDifference);
// }