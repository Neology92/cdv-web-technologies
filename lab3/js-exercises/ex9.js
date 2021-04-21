const findMinAndMax = (arr) => {
  if (Array.isArray(arr) && arr.length > 0)
    console.log(`Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`);
  else console.error("Argument must be an array with length min: 1");
};
