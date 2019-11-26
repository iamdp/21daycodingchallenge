const chooseStations = (stations) => {
  let appropirateVotingStations = [];
  for (const station of stations) {
    const [name, capacity, venueType] = station;
    if (capacity >= 20 && (venueType === 'school' || venueType === 'community centre')) {
      appropirateVotingStations.push(name);
    }
  }
  return appropirateVotingStations;
}
