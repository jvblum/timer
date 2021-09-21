const args = process.argv.slice(2);

const timer = function(num) {
  if (num.length === 0) return console.log("please input number");
  for (const elm of num) {
    if (isNaN(elm) || elm < 0) console.log("ignoring invalid input:", elm); 
    else setTimeout(() => console.log(".@", elm + "s"), elm * 1000); 
  }
}

timer(args);