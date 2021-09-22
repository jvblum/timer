const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  if (key === "b") console.log(".@") // this is a "beep"
  if (!isNaN(key)) {
    setTimeout(() => console.log(".@"), key * 1000);
    console.log(`setting timer for ${key} seconds...`);
  }
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!\n");
    process.exit();
  }
});

console.log("\ninput any number from 1 to 9 to set timer");

