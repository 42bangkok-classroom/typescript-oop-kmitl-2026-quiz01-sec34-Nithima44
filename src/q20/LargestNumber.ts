const arg = process.argv.slice(2);
if (arg.length === 0) {
    console.log("Please provide at least one number.");
    process.exit(1);
}
let largest = Number(arg[0]);

for (let i = 1; i < arg.length; i++) {
    const num = Number(arg[i]);
    if (!isNaN(num) && num > largest) {
        largest = num;
    }
}

console.log(largest);