const lightsOn = function(lights) {
  let updatedLights = lights;
  
  for (let light of updatedLights) {
    light.on = true;
  }
  
  return updatedLights;
};

const lightsOff = function(lights) {
  let updatedLights = lights;
  
  for (let i = 0; i < updatedLights.length; i++) {
    updatedLights[i].on = false;
  }
  
  return updatedLights;
};

const toggleLights = function(lights, lightsAreOn) {
  if (lightsAreOn) {
    return lightsOff(updatedLights);
  } else {
    return lightsOn(updatedLights);
  }
};
