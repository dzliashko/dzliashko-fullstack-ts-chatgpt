function sum(a: number, b: number): number {
    return a + b;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

function printMessage(msg: string): void {
    if (typeof msg === "number") {
        console.log(msg);
    } else {
        console.log("Not a string");
    }
}

function fail(msg: string): never {
    throw new Error(msg);
}

console.log(sum(3, 7));
console.log(isEven(4));
console.log(isEven(3));
printMessage("Message printed");
fail("Message not printed");
