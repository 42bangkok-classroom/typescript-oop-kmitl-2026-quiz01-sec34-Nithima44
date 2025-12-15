const size = Number(process.argv[2]);
if (isNaN(size) || size <= 0) {
    console.log("Please enter a valid positive number.");
    process.exit(1);
}

for (let i = 1; i <= size; i++) {
    const char = (i % 2 === 1) ? "1" : "0";
    console.log(char.repeat(size));
}