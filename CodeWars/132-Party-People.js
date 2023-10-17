function partyPeople(party) {
  let attendeeCount = party.length;

  party
    .sort((a, b) => b - a)
    .map((element) => {
      if (element > attendeeCount) {
        attendeeCount--;
      }
    });
  return attendeeCount;
}
