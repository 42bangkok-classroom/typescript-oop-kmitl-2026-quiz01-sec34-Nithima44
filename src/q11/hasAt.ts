const text = process.argv[2];
if (!text){
    console.log("PLease enter a valid text");
    process.exit(1);
}
if (text.includes("@")){
    console.log("Has @");
} else {
    console.log("No @");
}