//noinspection Duplicates
class Solutions {
  // Best (so far)
  reverseBits_best(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

  // All solutions
  reverseBits_010825_hard(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

  reverseBits_040725_first(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }
}