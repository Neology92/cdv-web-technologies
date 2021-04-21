const countSquareProperties = (a, b) => {
  if (a <= 0 || b <= 0) {
    console.error("Variables must be grater than 0");
    return;
  }

  const field = a * b;
  const circuit = 2 * (a + b);
  const diagonal = Math.sqrt(a * a + b * b);

  console.log(
    `Field: ${field.toFixed(2)}, Circuit: ${circuit.toFixed(
      2
    )}, Diagonal: ${diagonal.toFixed(2)}`
  );
};
