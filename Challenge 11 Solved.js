const busTimes = buses => {
  let busArrivalTimes = {};
  
  for (const bus in buses) {
    busArrivalTimes[bus] = buses[bus].distance / buses[bus].speed;
  }
  
  return busArrivalTimes;
};
