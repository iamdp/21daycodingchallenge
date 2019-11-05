
const chooseStations = (stations) => {
  
  let appropirateVotingStations = [];
  
  for (const station of stations) {
    const [name, capacity, venueType] = station;
    /* 
      The above code is called destructuring and is the same as writing:
      const name = station[0];
      const capacity = station[1];
      const venueType = station[2];
    */
    if (capacity >= 20 && (venueType === 'school' || venueType === 'community centre')) {
      appropirateVotingStations.push(name);
    }
  }
  
  return appropirateVotingStations;
}
