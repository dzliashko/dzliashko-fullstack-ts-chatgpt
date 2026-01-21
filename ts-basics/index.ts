function sum(a: number, b: number): number {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        throw new Error("both arguments must be a numbers");
    }
}

function isEven(n: number): boolean {
    if (typeof n === "number") {
        return n % 2 == 0;
    } else {
        throw new Error("Argument is not a number");
    }
}

function printMessage(msg: string): void {
    if (typeof msg === "number") {
        console.log(msg);
    } else {
        throw new Error("Argument is not a number");
    }
}

// function fail(msg: string): never {
//     console.log(msg);
// }

console.log(sum(3, 7));
console.log(isEven(4));
console.log(isEven(3));
printMessage("Message printed");
// fail("Message not printed");
