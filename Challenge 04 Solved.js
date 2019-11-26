const registerToVote = (name, unregisteredVoters) => {
  let updatedUnregisteredVoters = [];
  let i;
  for (i = 0; i < unregisteredVoters.length; i++) {
    if (name != unregisteredVoters[i]) {
      updatedUnregisteredVoters.push(unregisteredVoters[i]);
    }
  }
  return updatedUnregisteredVoters;
}