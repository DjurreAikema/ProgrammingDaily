//noinspection Duplicates
class Solutions {
  // Best (so far)
  missingNumber_best(nums) {
    let n = nums.length;

    // Start with n (the largest number that should be in the complete range [0, n])
    // This ensures we include n in our XOR calculation
    let xorr = n;

    // For each index i from 0 to n-1:
    for (let i = 0; i < n; i++) {
      // XOR with i: This includes all numbers from 0 to n-1 in our calculation
      // XOR with nums[i]: This includes all numbers actually present in the array
      xorr ^= i ^ nums[i];

      // THE RIGHT SIDE: i ^ nums[i]
      // This XORs the INDEX (i) with the VALUE at that index (nums[i])
      // Why? We're comparing what SHOULD be there vs what IS there
    }

    // At this point, we've XORed:
    // - All numbers from 0 to n (complete range)
    // - All numbers in the array (missing one number)
    // The missing number is the only one that doesn't cancel out
    return xorr;
  }

  // All solutions
  missingNumber_180925_easy(nums) {
    let n = nums.length;
    let xorr = n;

    for (let i = 0; i < n; i++) {
      xorr ^= i ^ nums[i];
    }

    return xorr;
  }

  missingNumber_100925_good(nums) {
    let n = nums.length;
    let xorr = n;
    for (let i = 0; i < n; i++) {
      xorr ^= i ^ nums[i];
    }
    return xorr;
  }

  missingNumber_010925_good(nums) {
    let n = nums.length;
    let xorr = n;
    for (let i = 0; i < n; i++) {
      xorr ^= i ^ nums[i];
    }
    return xorr;
  }

  missingNumber_280825_good(nums) {
    let n = nums.length;
    let xorr = n;
    for (let i = 0; i < n; i++) {
      xorr ^= i ^ nums[i];
    }
    return xorr;
  }

  missingNumber_260825_good(nums) {
    const n = nums.length;
    let xorr = n;
    for (let i = 0; i < n; i++) {
      xorr ^= i ^ nums[i];
    }
    return xorr;
  }

  missingNumber_250825_hard(nums) {
    let n = nums.length;
    let xorr = n;

    for (let i = 0; i < n; i++) {
      xorr ^= i ^ nums[i];
    }

    return xorr;
  }

  missingNumber_240826_hard(nums) {
    let n = nums.length;
    let xorr = n;

    for (let i = 0; i < n; i++) {
      xorr ^= i ^ nums[i];
    }

    return xorr;
  }

  missingNumber_first_fail(nums) {
    let test = nums[0]
    for (let i = 0; i < nums.length; i++) {
      if (test !== nums[i]) return test;
      test++;
    }
    return 0;
  }
}