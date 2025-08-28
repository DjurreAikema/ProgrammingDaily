//noinspection Duplicates
class Solutions {
  // Best (so far)
  reverseBits_best(n) {
    let res = 0; // This will store our reversed result

    // Loop through all 32 bit positions (0 to 31)
    for (let i = 0; i < 32; i++) {
      // Step 1: Extract the bit at position i from the original number
      // n >>> i = shift n right by i positions (moves bit i to position 0)
      // & 1 = keep only the rightmost bit (gives us 0 or 1)
      const bit = (n >>> i) & 1;

      // Step 2: Place this bit at the "opposite" position in the result
      // Position i in original → Position (31-i) in result
      // bit << (31-i) = shift the bit left to position (31-i)
      // res += ... = add this bit to our result
      res += bit << (31 - i);
    }

    // Step 3: Convert result to unsigned 32-bit integer
    // >>> 0 ensures the result is treated as a positive 32-bit number
    return res >>> 0;
  }

  // All solutions
  reverseBits_280825_hard(n) {
    let res = 0;
    for (let i = 0; i < n; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

  reverseBits_240825_good(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

  reverseBits_220825_easy(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

  reverseBits_210825_hard(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

  reverseBits_060825_easy(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

  reverseBits_030825_hard(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (i >>> 1) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

  reverseBits_020825_hard(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
      const bit = (n >>> i) & 1;
      res += bit << (31 - i);
    }
    return res >>> 0;
  }

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