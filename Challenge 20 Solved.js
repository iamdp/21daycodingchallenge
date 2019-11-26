const PI = 3.14159;

const sphereVolume = function (radius) {
  return 4/3* PI * Math.pow(radius, 3);
};

const coneVolume = function (radius, height) {
  return PI * Math.pow(radius, 2) * (height / 3);
};

const prismVolume = function (height, width, depth) {
  return height * width * depth;
};

const totalVolume = function (solids) {
  let volume = 0;
  
  for (const solid of solids) {
    if (solid.type === 'sphere') {
      volume += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      volume += (coneVolume(solid.radius, solid.height));
    } else if (solid.type === 'prism') {
      volume += (prismVolume(solid.height, solid.width, solid.depth));
    }
  }
  return volume;
};
