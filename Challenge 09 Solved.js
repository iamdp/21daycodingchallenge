const carPassing = (cars, speed) => {
  updatedCars = cars;
  
  updatedCars.push(
    {
      time: Date.now(),
      speed: speed,
    }
  );
  
  return updatedCars;
};
