const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Please provide at least one number.");
    process.exit(1);
}
let largest = Number(args[0]);

for (let i = 1; i < args.length; i++) {
    const num = Number(args[i]);
    if (!isNaN(num) && num > largest) {
        largest = num;
    }
}

console.log(largest);