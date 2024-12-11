//noinspection Duplicates
class Solutions {
  // Best (so far)
  maxProfit_best(prices) {
    let l = 0, r = 1;
    let maxPrice = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        const profit = prices[r] - prices[l];
        maxPrice = Math.max(maxPrice, profit);
      } else {
        l = r;
      }

      r++;
    }

    return maxPrice;
  }

  // All solutions
  maxProfit111224(prices) {
    let l = 0, r = 1;
    let maxPrice = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        const profit = prices[r] - prices[l];
        maxPrice = Math.max(maxPrice, profit);
      } else {
        l = r;
      }

      r++;
    }

    return maxPrice;
  }
}