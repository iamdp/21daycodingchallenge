
const checkAir = function (samples, threshold) {
  dirtyCounter = 0;
  
  for (const sample of samples) {
    if (sample === "dirty") {
      dirtyCounter++;
    }
  }
  
  if (dirtyCounter / samples.length > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};
