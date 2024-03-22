export const convertNumberinUSD = (number) => {
  const numberWithCommas = number.toLocaleString();
  var arr = numberWithCommas.split(",");
  if (arr.length === 5) {
    //Trillions
    return arr[0] + "." + arr[1].slice(0, 2) + "T";
  } else if (arr.length === 4) {
    //Billions
    return arr[0] + "." + arr[1].slice(0, 2) + "B";
  } else if (arr.length === 3) {
    // Millions
    return arr[0] + "." + arr[1].slice(0, 2) + "M";
  } else if (arr.length === 2) {
    // Thousands
    return arr[0] + "." + arr[1].slice(0, 2) + "K";
  } else {
    // Hundreds
    return number.toLocaleString();
  }
};


export const convertNumberinINR = (number) => {
  const numberWithCommas = number.toLocaleString();
  var arr = numberWithCommas.split(",");
   
   if (arr.length === 7) { 
    return arr[0] +arr[1]+(arr[2])+arr[3]+ "." + arr[1].slice(0, 2) + "Cr";
  }
  else if (arr.length === 6) { 
    return arr[0] +arr[1]+(arr[2])+ "." + arr[1].slice(0, 2) + "Cr";
  }
  else if (arr.length === 6) { 
    return arr[0] +arr[1]+(arr[2])/10+ "." + arr[1].slice(0, 2) + "Cr";
  }

  else if (arr.length === 5) {
    return arr[0] +arr[1]+ "." + arr[1].slice(0, 2) + "Cr";
  } 
  
  else if (arr.length === 4) {
    return arr[0] + "." + arr[1].slice(0, 2) + "Cr";
  } 
  
  else if (arr.length === 3) {
    return arr[0] + "." + arr[1].slice(0, 2) + "L";
  } 
  
  else if (arr.length === 2) {
    return arr[0] + "." + arr[1].slice(0, 2) + "Th";
  } 

  else {
    return number.toLocaleString();
  }
};
