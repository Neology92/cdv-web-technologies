const power = (a) => {
  let res = a >= 1 ? a : 1;
  while (--a > 0) {
    res *= a;
  }
  return res;
};
