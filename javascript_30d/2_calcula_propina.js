function calculateTip(billAmount, tipPercentage) {
    let tip;
    tip = billAmount * tipPercentage / 100;
    return tip;
  }
  
  console.log(calculateTip(100, 10));
  console.log(calculateTip(1524.33, 25));