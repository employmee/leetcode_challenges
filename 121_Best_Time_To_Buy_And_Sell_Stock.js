/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let buyAtIndex = 0;
  let sellAtIndex = prices.length-1;
  let maxPrice = prices[prices.length-1]-prices[0] > 0 ? prices[prices.length-1]-prices[0] : 0
  for (let i=1; i<prices.length; i++) {
      if(prices[i] < prices[buyAtIndex]) {
          buyAtIndex = i
      } else {
          sellAtIndex = i
      }
      if (prices[sellAtIndex] - prices[buyAtIndex] > maxPrice && buyAtIndex < sellAtIndex) {
          maxPrice = prices[sellAtIndex] - prices[buyAtIndex]
      }
  }
  return maxPrice
};
