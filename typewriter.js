const sentence = "This is type writing!";
let delay = 0;
  
  for(let char of sentence){
    setTimeout(() => {
      process.stdout.write(char + '\n');
    }, delay);
    delay += 50;
  }
  