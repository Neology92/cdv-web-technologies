const generateRandomNumbers = (n, a, b) => {
  if (n < 1) {
    console.error("n must be greater than 1");
    return;
  }
  if (a >= b) {
    console.error("a must be greater than b");
    return;
  }

  for (let i = 0; i < n; i++) {
    console.log(Math.round(Math.random() * (b - a) + a));
  }
};
