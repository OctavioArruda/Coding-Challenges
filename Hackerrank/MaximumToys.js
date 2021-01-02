// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let toys = 0;
    let sum = 0;

    const sortedPrices = prices.sort((a, b) => a - b);
    
    sortedPrices.forEach(price => {        
        sum += price;
        toys++;

        if (sum > k) {            
            sum -= price;            
            toys--;
        }
    }); 

    return toys;
}