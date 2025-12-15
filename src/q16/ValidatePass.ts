const pass = process.argv[2];
if (!pass) {
    console.log("Invalid");
    process.exit(1);
}
let isValid = true;
if (pass.length < 8) {
    isValid = false;
}
if (!/\d/.test(pass)) {
    isValid = false;
}
if (!/[A-Z]/.test(pass)) {
    isValid = false;
}
console.log(isValid ? "Valid" : "Invalid");