//noinspection Duplicates
class Solutions {
  // Best (so far)
  countBits_best(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }

  // All solutions
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