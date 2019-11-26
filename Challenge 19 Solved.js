const pumpkinSpice = money => {
    console.log(money);
    const pumpkinPieQty = Math.floor(money / 5);
    let remainingMoney = money % 5;
    const pumpkinLatteQty = Math.floor(remainingMoney / 3);
    remainingMoney = remainingMoney % 3;
    const pumpkinMacaronQty = Math.floor(remainingMoney / 1);
    const pumpkinGrams =  pumpkinPieQty * 30 +
                          pumpkinLatteQty * 15 +
                          pumpkinMacaronQty * 3;
    
    return [
      pumpkinPieQty,
      pumpkinLatteQty,
      pumpkinMacaronQty,
      pumpkinGrams
      ];
  };
  