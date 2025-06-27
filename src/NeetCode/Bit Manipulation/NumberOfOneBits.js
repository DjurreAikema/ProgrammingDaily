//noinspection Duplicates
class Solutions {
  // Best (so far)
  hammingWeight_best(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  // All solutions
  hammingWeight_270625_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_260625_first(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }
}