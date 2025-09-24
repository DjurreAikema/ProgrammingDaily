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
  search_240925_hard(nums, target) {
    let l = 0, r = nums.length;

    while (l < r) {
      const m = l + Math.floor((r - l) / 2);
      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search_220825_easy(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search_080825_easy(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search_010825_easy(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search_240725_hard(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search_280625_hard(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      // Left + Half the distance between L and R
      const m = l + Math.floor((r - l) / 2);

      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search_100625_good(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
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

  search_180525_good(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
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

  search_110525_good(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
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

  search_060525_good(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
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

  search_010525_good(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
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

  search_290425_good(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (target < nums[m]) {
        r = m - 1;
      } else if (target > nums[m]) {
        l = m + 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search_270425_hard(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = 1 + Math.floor((r - l) / 2);
      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search170425(nums, target) {
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

  search230125(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = 1 + Math.floor((r - l) / 2);
      if (nums[m] < target) {
        l = r + 1;
      } else if (nums[m] > target) {
        r = l - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search040125(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);
      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search010125(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = 1 + Math.floor((r - l) / 2);
      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search221224(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);

      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search171224(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);
      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  }

  search161224(nums, target) {
    // You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

    // Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

    // Your solution must run in O(logn) time

    let l = 0, r = nums.length - 1;

    while (r > l) {
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