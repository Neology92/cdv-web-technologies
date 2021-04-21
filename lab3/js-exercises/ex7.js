const whichQuarter = (x, y) => {
  const vertical = y >= 0 ? "upper" : "bottom";
  const horizontal = x >= 0 ? "right" : "left";

  return `${vertical}-${horizontal}`;
};
