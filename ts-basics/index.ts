function sum(a: number, b: number): number {
    return a + b;
}

function isEven(n: number): boolean {
    return n % 2 == 0;
}

function printMessage(msg: string): void {
    console.log(msg);
}

function fail(msg: string): never {
    throw new Error(msg);
}

console.log(sum(3, 7));
console.log(isEven(4));
console.log(isEven(3));
printMessage("Message printed");
fail("Message not printed");
