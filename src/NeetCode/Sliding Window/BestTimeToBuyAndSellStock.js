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
  maxProfit271224(prices) {
    let l = 0, r = 1;
    let maxProfit = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        const profit = prices[r] - prices[l];
        maxProfit = Math.max(profit, maxProfit);
      } else {
        l = r;
      }

      r++;
    }

    return maxProfit;
  }

  maxProfit221224(prices) {
    let l = 0, r = 1;
    let maxProfit = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        const profit = prices[r] - prices[l];
        maxProfit = Math.max(profit, maxProfit);
      } else {
        l = r;
      }

      r++;
    }

    return maxProfit;
  }

  maxProfit161224(prices) {
    let l = 0, r = 1;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
      if (prices[r] > prices[l]) {
        const profit = prices[r] - prices[l];
        maxProfit = Math.max(profit, maxProfit);
      } else if (prices[r] < prices[l]) {
        l = r;
      }

      r++;
    }

    return maxProfit;
  }

  maxProfit131224(prices) {
    let l = 0, r = 1;
    let maxProfit = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        const profit = prices[r] - prices[l];
        maxProfit = Math.max(profit, maxProfit);
      } else {
        l = r;
      }

      r++;
    }

    return maxProfit;
  }

  maxProfit121224(prices) {
    let l = 0, r = 1;
    let maxProfit = 0;

    while (r < prices.length) {
      const profit = prices[r] - prices[l];
      if (profit < prices[l]) {
        maxProfit = Math.max(profit, maxProfit);
      } else {
        l = r;
      }
      r++;
    }

    return maxProfit;
  }

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