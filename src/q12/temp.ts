const temp = Number(process.argv[2]);
if (isNaN(temp)){
    console.log("Please enter a valid number.");
    process.exit(1);
}
if (temp > 30){
    console.log("Hot");
} else {
    console.log("Normal");
}