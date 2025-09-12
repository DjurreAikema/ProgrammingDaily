//noinspection Duplicates
class Solutions {
  // Best (so far)
  hasDuplicate_best(nums) {
    return new Set(nums).size < nums.length;
  }

  // All solutions
  hasDuplicate_120925_easy(nums) {
    const seen = new Map();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.set(num, true);
    }
    return false;
  }

  hasDuplicate_300625_hard(nums) {
    return new Set(nums).size !== nums.length;
  }

  hasDuplicate020225(nums) {
    return new Set(nums).size !== nums.length;
  }

  hasDuplicate221224(nums) {
    return new Set(nums).size !== nums.length;
  }

  hasDuplicate121224(nums) {
    return new Set(nums).size < nums.length;
  }

  hasDuplicate091124(nums) {
    return new Set(nums).size < nums.length;
  }

  hasDuplicate061224(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) return true;
      }
    }

    return false;
  }
}