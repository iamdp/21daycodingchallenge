const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let fare = 1.0;
  
  fare += distanceTraveled * 0.25;
  
  if (numberOfPeople >= 30) {
    fare += 0.25;
  }
  
  return "$" + fare.toFixed(2);
};