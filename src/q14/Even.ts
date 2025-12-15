const n = Number(process.argv[2]);
if (isNaN(n)) {
    process.exit(0);
}
for (let i = 0; i <= n; i += 2) {
    console.log(i);
}