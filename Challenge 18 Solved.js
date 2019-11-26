const countTickets = (tickets) => {
    const ticketCount = {
      red: 0,
      green: 0,
      blue: 0
    };
    
    for (const ticket of tickets) {
      ticketCount[ticket]++;
    }
    
    return ticketCount;
  };
  
  const bestOdds = (tickets, raffleEntries) => {
    const ticketCount = countTickets(tickets);
    
    const redOdds = ticketCount.red / raffleEntries.red;
    const greenOdds = ticketCount.green / raffleEntries.green;
    const blueOdds = ticketCount.blue / raffleEntries.blue;
    
    if (redOdds >= greenOdds && redOdds >= blueOdds) {
      return "You have the best odds of winning the red raffle.";
    } else if (greenOdds >= redOdds && greenOdds >= blueOdds) {
      return "You have the best odds of winning the green raffle.";
    } else { // Blue
      return "You have the best odds of winning the blue raffle.";
    }
  };
  