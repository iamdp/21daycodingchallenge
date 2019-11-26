const voterTurnout = (voter_signatures, voter_ids) => {
  let result = "All clear, we can count the votes!";
  if (voter_signatures.length !== voter_ids.length) {
    result = false;
  } else {
    for (let i=0; i < voter_signatures.length; i++) {
      if (voter_signatures[i] !== voter_ids[i]) {
        result = "FRAUD!";
      }
    }
  }
  return result;
};
