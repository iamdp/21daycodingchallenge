const termTopics = (interviews) => {
  let count = [
                  0, // Smart City
                  0, // Arts Funding
                  0  // Transportation
                ];
                
  for (const interview of interviews) {
    if (interview === 'smart city') {
      count[0]++;
    }
    if (interview === 'arts funding') {
      count[1]++;
    }
    if (interview === 'transportation') {
      count[2]++;
    }
  }
  return count
}
