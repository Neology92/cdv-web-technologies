const countCircleProperties = (r) => {
  if (r <= 0) {
    console.error("Radius must be grater than 0");
    return;
  }

  const field = Math.PI * r * r;
  const circuit = 2 * Math.PI * r;

  console.log(`Field: ${field.toFixed(2)}, Circuit: ${circuit.toFixed(2)}`);
};
