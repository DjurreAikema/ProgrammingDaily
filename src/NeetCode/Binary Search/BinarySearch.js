//noinspection Duplicates
class Solutions {
  // Best (so far)
  search_best(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      // Left + half the distance between L and R
      const m = l + Math.floor((r - l) / 2);

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
  search141224(nums, target) {
    // Set a left pointer to the start of the array
    // Set a right pointer to the end of the array
    let l = 0, r = nums.length - 1;

    // While the left pointer is smaller than the right pointer
    while (l <= r) {
      // Calculate the middle by taking the distance between r and l and dividing it by 2
      const m = l + Math.floor((r - l) / 2);

      // Check if m is > than target
      if (nums[m] > target) {
        // if m is greater than the right side of the array can be cut
        r = m - 1;
      } else if (nums[m] < target) {
        // if m is smaller than the target the left side of the array can be cut
        l = m + 1;
      } else {
        // If its not bigger or smaller, then it must be the target
        return m;
      }
    }

    // target not found
    return -1;
  }

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