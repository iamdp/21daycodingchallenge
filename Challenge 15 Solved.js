const finalPosition = (moves) => {
    let currentLocation = [0, 0];
  
    for (const move of moves) {
      if (move === 'north') {
        currentLocation[1]++;
      } else if (move === 'south') {
        currentLocation[1]--;
      } else if (move === 'west') {
        currentLocation[0]--;
      } else { // Assumed to be east
        currentLocation[0]++;
      }
    }
    
    return currentLocation;
  };
  