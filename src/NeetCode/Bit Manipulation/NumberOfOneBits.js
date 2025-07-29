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
  hammingWeight_290725_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_240725_hard(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_030725_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_290625_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

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