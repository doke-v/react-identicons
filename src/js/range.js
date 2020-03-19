const range = (n, in_min, in_max, out_min, out_max) => {
  return ((n - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default range;
