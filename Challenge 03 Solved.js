const castVote = (name, votes) => {
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
}
