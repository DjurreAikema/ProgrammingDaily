//noinspection Duplicates
class Solutions {
  // Best (so far)
  search_best(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      // Left + half the distance between L and R
      const m = l + Math.floor(((r - l) / 2));

      if (nums[m] > target) {
        r = m - 1;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  // All solutions
  search131224(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      // Left + half the distance between L and R
      let m = Math.floor(l + ((r - l) / 2));

      if (nums[m] > target) {
        r = m - 1;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        return m;
      }
    }

    return -1;
  }
}