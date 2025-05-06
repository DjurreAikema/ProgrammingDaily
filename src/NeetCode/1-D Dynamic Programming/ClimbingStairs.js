//noinspection Duplicates
class Solutions {
  // Best (so far)
  climbStairs_best(n) {
    const cache = new Int32Array(n).fill(-1);
    const dfs = (i) => {
      if (i >= n) return i === n;
      if (cache[i] !== -1) return cache[i];
      return cache[i] = dfs(i + 1) + dfs(i + 2);
    }
    return dfs(0);
  }

  // All solutions
  climbStairs_060525_good(n) {
    const cache = new Int32Array(n).fill(-1);
    const dfs = (i) => {
      if (i >= n) return i === n;
      if (cache[i] !== -1) return cache[i];
      return cache[i] = dfs(i + 1) + dfs(i + 2);
    }
    return dfs(0);
  }

  climbStairs_020525_good(n) {
    const cache = new Int32Array(n).fill(-1);
    const dfs = (i) => {
      if (i >= n) return i === n;
      if (cache[i] !== -1) return cache[i];
      return cache[i] = dfs(i + 1) + dfs(i + 2);
    }
    return dfs(0);
  }

  climbStairs_010525_hard(n) {
    const cache = new Int32Array(n).fill(-1);
    const dfs = (i) => {
      if (i >= n) return i === n;
      if (cache[i] !== -1) return cache[i];
      return cache[i] = dfs(i + 1) + dfs(i + 2);
    }
    return dfs(0);
  }

  climbStairs270325(n) {
    const cache = new Int32Array(n).fill(-1);
    const dfs = (i) => {
      if (i >= n) return i === n;
      if (cache[i] !== -1) return cache[i];
      return cache[i] = dfs(i + 1) + dfs(i + 2);
    }
    return dfs(0);
  }

  climbStairs020225(n) {
    const cache = new Int32Array(n).fill(-1);
    const dfs = (i) => {
      if (i >= n) return i === n;
      if (cache[i] !== -1) return cache[i];
      return cache[i] = dfs(i + 1) + dfs(i + 2);
    }
    return dfs(0);
  }

  climbStairs100125(n) {
    const cache = new Int32Array(n).fill(-1);
    const dfs = (i) => {
      if (i >= n) return i === n;
      if (cache[i] !== -1) return cache[i];
      return cache[i] = dfs(i + 1) + dfs(i + 2);
    }
    return dfs(0);
  }
}