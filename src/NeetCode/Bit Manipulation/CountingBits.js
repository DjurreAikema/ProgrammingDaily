//noinspection Duplicates
class Solutions {
  // Best (so far)
  countBits_best(n) {
    // Create an array to store results for numbers 0 through n
    // dp[i] will contain the count of 1-bits in the number i
    let dp = new Array(n + 1).fill(0);

    // dp[0] = 0 because 0 has no 1-bits (already set by fill(0))
    // Start from 1 and calculate bit count for each number
    for (let i = 1; i <= n; i++) {
      // The magic formula:
      // Number of 1-bits in i = (1-bits in i÷2) + (1 if i is odd, 0 if even)
      // i >> 1 = i divided by 2 (removes the rightmost bit)
      //
      // Example: i = 5 (binary: 101)
      // - i >> 1 = 2 (binary: 10)
      // - dp[2] was already calculated as 1
      // - i & 1 = 1 (because 5 is odd)
      // - So dp[5] = dp[2] + 1 = 1 + 1 = 2 ✓
      dp[i] = dp[i >> 1] + (i & 1);
    }
    // Return the complete array of bit counts
    return dp;
  }

  // All solutions
  countBits_070825_hard(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[n >> i] + (i & 1);
    }
    return dp;
  }

  countBits_050825_good(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  countBits_030825_hard(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      // dp[i] = dp[n >> i] +
    }
  }

  countBits_010825_easy(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  countBits_310725_good(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  countBits_250725_good(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  countBits_240725_hard(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  countBits_220725_hard(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  countBits_030725_good(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  countBits_020725_hard(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  countBits_010725_first_soloSolve(n) {
    const out = [];

    for (let i = 0; i <= n; i++) {
      let num = i;
      let res = 0;

      while (num !== 0) {
        num &= num - 1;
        res++;
      }

      out.push(res);
    }

    return out;
  }
}