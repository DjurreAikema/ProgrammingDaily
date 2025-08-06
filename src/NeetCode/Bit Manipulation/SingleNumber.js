//noinspection Duplicates
class Solutions {
  // Best (so far)
  singleNumber_best(nums) {
    let res = 0; // Start with 0 (neutral element for XOR)

    // XOR all numbers together
    // The magic: XOR has special properties that make pairs cancel out!
    for (const num of nums) {
      res ^= num;
    }
    // WHY DOES THIS WORK? The Magic Properties of XOR (^):
    // Property 1: Any number XOR itself = 0
    // Property 2: Any number XOR 0 = that number
    // Property 3: XOR is commutative and associative
    // a ^ b = b ^ a (order doesn't matter)
    // (a ^ b) ^ c = a ^ (b ^ c) (grouping doesn't matter)

    // After XORing everything, only the single number remains
    return res;
  }

  // All solutions
  singleNumber_060825_hard(nums) {
    while (nums.length > 1) {

    }
  }

  singleNumber_240725_good(nums) {
    let res = 0;
    for (const num of nums) {
      res ^= num;
    }
    return res;
  }

  singleNumber_030725_good(nums) {
    let res = 0;
    for (let num of nums) {
      res ^= num;
    }
    return res;
  }

  singleNumber_290625_good(nums) {
    let res = 0;
    for (const num of nums) {
      res ^= num;
    }
    return res;
  }

  singleNumber_270625_good(nums) {
    let res = 0;
    for (const num of nums) {
      res ^= num;
    }
    return res;
  }

  singleNumber_260625_first(nums) {
    let res = 0;
    for (const num of nums) {
      res ^= num;
    }
    return res;
  }
}