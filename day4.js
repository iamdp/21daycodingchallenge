const registerToVote = (name, unregisteredVoters) => {
  // Code here!
  /*
  let updatedUnregisteredVoters = [];
  let i;
  for (i = 0; i < unregisteredVoters.length; i++) {
    if (name != unregisteredVoters[i]) {
      updatedUnregisteredVoters.push(unregisteredVoters[i]);
    }
  }
  
  return updatedUnregisteredVoters;
  */
  //words.filter(word => word.length > 6);
  
  return unregisteredVoters.filter(el => el != name);
  
  // Remember to return a value!
}
