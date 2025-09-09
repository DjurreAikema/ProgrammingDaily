//noinspection Duplicates
class Solutions {
  // Best (so far)
  hammingWeight_best(n) {
    let res = 0; // Count of 1-bits we've found
    while (n !== 0) { // Keep going until all 1-bits are removed

      // THE MAGIC TRICK: Remove the rightmost 1-bit from n
      // This operation removes exactly ONE 1-bit each time
      n &= n - 1;
      res++;
    }
    return res;
  }

  // All solutions
  hammingWeight_090925_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_020925_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_290825_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_260825_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_240825_hard(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_190825_hard(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  hammingWeight_050825_good(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }

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