function myFunction() {
  for (let i = 0; i < 10; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 1000);
    })(i);
  }
}

myFunction();