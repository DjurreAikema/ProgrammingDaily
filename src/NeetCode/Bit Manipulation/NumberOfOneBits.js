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
  hammingWeight_first(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }
}