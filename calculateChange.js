const calculateChange = function(total, cash) {
  let needToChange = cash - total;
  let change = {};

  const coinTypes = ["twentyDollar", "tenDollar", "fiveDollar", "twoDollar", 
  "oneDollar", "quarter", "dime", "nickel", "penny"];
  const coinValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let amount;

  for (let i = 0; i < coinValue.length; i++) {
    amount = Math.floor(needToChange/coinValue[i]); //how many times a coin value is in
    if (amount > 0) {
      change[coinTypes[i]] = amount; //push new key and value to the object
      needToChange %= coinValue[i]; //reassign with a remainder
    }
  }

  return change;
};




/* const calculateChange = function(total, cash) {
  let change = {};
  let needToChange = cash - total;

  //How many 20 dollars
  let twentyDollar = 0;
  while (needToChange >= 2000) {
    needToChange -= 2000;
    twentyDollar++;
    change.twentyDollar = twentyDollar;
  } 

  //How many 10 dollars
  let tenDollar = 0;
  while (needToChange >= 1000) {
    needToChange -= 1000;
    tenDollar++;
    change.tenDollar = tenDollar;
  }

  //How many 5 dollars
  let fiveDollar = 0;
  while (needToChange >= 500) {
    needToChange -= 500;
    fiveDollar++;
    change.fiveDollar = fiveDollar;
  }

  //How many 2 dollars
  let twoDollar = 0;
  while (needToChange >= 200) {
    needToChange -= 200;
    twoDollar++;
    change.twoDollar = twoDollar;
  }

  //How many 1 dollars
  let oneDollar = 0;
  while (needToChange >= 100) {
    needToChange -= 100;
    oneDollar++;
    change.oneDollar = oneDollar;
  }

  //How many quaters
  let quarter = 0;
  while (needToChange >= 25) {
    needToChange -= 25;
    quarter++;
    change.quarter = quarter;
  }

  //How many dimes
  let dime = 0;
  while (needToChange >= 10) {
    needToChange -= 10;
    dime++;
    change.dime = dime;
  }

  //How many nickels
  let nickel = 0;
  while (needToChange >= 5) {
    needToChange -= 5;
    nickel++;
    change.nickel = nickel;
  }

  //How many pennies
  let penny = 0;
  while (needToChange >= 1) {
    needToChange -= 1;
    penny++;
    change.penny = penny;
  }
  
  return change;

};*/

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));