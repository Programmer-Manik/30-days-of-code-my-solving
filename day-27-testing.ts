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



function main() {
    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const n: number = parseInt(firstMultipleInput[0], 10);

        const k: number = parseInt(firstMultipleInput[1], 10);

        const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    }
}
function minimumIndex(seq: number[]): number {
    if (seq.length === 0) {
        throw new Error("Cannot get the minimum value index from an empty sequence");
    }
    let minIdx = 0;
    for (let i = 1; i < seq.length; i++) {
        if (seq[i] < seq[minIdx]) {
            minIdx = i;
        }
    }
    return minIdx;
}

class TestDataEmptyArray {
    static getArray(): number[] {
        return [];
    }
}

class TestDataUniqueValues {
    static getArray(): number[] {
        return [5, 3, 9, 1, 7];
    }

    static getExpectedResult(): number {
        return 3;  // The index of the minimum value (1) in the array
    }
}

class TestDataExactlyTwoDifferentMinimums {
    static getArray(): number[] {
        return [2, 4, 1, 6, 1, 9];
    }

    static getExpectedResult(): number {
        return 2;  // The index of the first minimum value (1)
    }
}

// Test runner function
function runTests() {
    // Test 1: TestDataEmptyArray
    let passed = false;
    try {
        minimumIndex(TestDataEmptyArray.getArray());
    } catch (e) {
        passed = true;
    }
    if (!passed) {
        throw new Error("TestDataEmptyArray: Test failed");
    }

    // Test 2: TestDataUniqueValues
    const uniqueValuesArray = TestDataUniqueValues.getArray();
    const uniqueValuesExpected = TestDataUniqueValues.getExpectedResult();
    if (minimumIndex(uniqueValuesArray) !== uniqueValuesExpected) {
        throw new Error("TestDataUniqueValues: Test failed");
    }

    // Test 3: TestDataExactlyTwoDifferentMinimums
    const twoDifferentMinimumsArray = TestDataExactlyTwoDifferentMinimums.getArray();
    const twoDifferentMinimumsExpected = TestDataExactlyTwoDifferentMinimums.getExpectedResult();
    if (minimumIndex(twoDifferentMinimumsArray) !== twoDifferentMinimumsExpected) {
        throw new Error("TestDataExactlyTwoDifferentMinimums: Test failed");
    }

    console.log("OK");
}

// Run the tests
runTests();
