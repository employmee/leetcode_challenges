/* It is a sweltering summer day, and a boy wants to buy some ice cream bars.

At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.

Return the maximum number of ice cream bars the boy can buy with coins coins.

Note: The boy can buy the ice cream bars in any order. */
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins) {
  // Sort array from smallest to largest -- should find faster way than using the sort operator :<
  const iceCreamCosts = costs.sort(function(a, b){return a-b});
  let coinsLeft = coins;
  let maxIceCream = 0

  // Loop through sorted cost array
  for (let i=0; i < iceCreamCosts.length; i++) {
    // Check if coins left after "buying" ice cream is still >= 0, if it is continue operation, else return the max number thus far
    if (coinsLeft - iceCreamCosts[i] >= 0) {
        coinsLeft = coinsLeft - iceCreamCosts[i]
        maxIceCream += 1;
    } else {
        return maxIceCream
    }
  }
  return maxIceCream;
};
