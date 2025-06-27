//noinspection Duplicates
class Solutions {
  // Best (so far)
  singleNumber_best(nums) {
    let res = 0;
    for (const num of nums) {
      res ^= num;
    }
    return res;
  }

  // All solutions
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