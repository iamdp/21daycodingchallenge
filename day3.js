
// Remember, the possible candidates are: Tim, Sally, and Beth (in that order)
const castVote = (name, votes) => {
  // Code here!
  updatedVotes = votes;
  switch (name) {
    case "Tim": 
      updatedVotes[0]++;
      break;
    case "Sally": 
      updatedVotes[1]++;
      break;
    case "Beth": 
      updatedVotes[2]++;
      break;
  }
  
  return updatedVotes;
  // Remember to return a value!
}
