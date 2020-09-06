// Complete the maximumToys function below.
function maximumToys(prices, k) {
  let toys = 0;
  let sum = 0;

  // for each element of array 
  prices.forEach(price => {
      // add the price to total sum
      sum += price;
      toys++;

      // if the budget is not enough, do not buy this toy
      if (sum > k) {            
          sum -= price;
          // the toy is removed from the list
          toys--;
      }
  }); 

  return toys;
}