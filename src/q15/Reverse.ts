const m = process.argv[2];
if (!m) {
    console.log("Please provide a string argument.");
    process.exit(1);
}

let reverse = "";
for (let i = m.length - 1; i >= 0; i--) {
    reverse += m[i];
}

console.log(reverse);