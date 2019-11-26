const festivalColours = color1 => {
    const h1 = Math.abs((color1 + 150));
    const h2 = Math.abs((color1 + 210));
    
    if (h1 > h2) {
      return [h2, h1];
    } else {
      return [h1, h2];
    }
  };