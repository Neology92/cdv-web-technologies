const checkIfPalindrom = (str) => {
  let i = str.length - 1;
  let isPalindrome = true;
  for (let letter of str) {
    isPalindrome = letter === str[i];
    if (!isPalindrome) break;
    i--;
  }

  return isPalindrome;
};
