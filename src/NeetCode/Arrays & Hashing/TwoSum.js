//noinspection Duplicates
class Solutions {
  // Best (so far)
  twoSum101224_best(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }

  // All solutions
  twoSum_030725_good(nums, target) {
    let prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }

  twoSum_120625_good(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff))
        return [prevMap.get(diff), i];

      prevMap.set(nums[i], i);
    }
  }

  twoSum_280525_good(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }
  }

  twoSum_210525_good(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }

  twoSum_150525_good(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }

  twoSum_130525_hard(nums, target) {
    let l = 0, r = nums.length - 1;
    let prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }
  }

  twoSum_090525_hard(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }

  twoSum_290425_hard(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }

  twoSum221224(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }
  }

  twoSum141224(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i]
      }

      prevMap.set(nums[i], i);
    }
  }

  twoSum111224(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }

  twoSum101224_4(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }

  twoSum101224_3(nums, target) {
    const indices = {}; // val -> index

    for (let i = 0; i < nums.length; i++) {
      indices[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (indices[diff] !== undefined && indices[diff] !== i) {
        return [i, indices[diff]];
      }
    }

    return [];
  }

  twoSum101224_2(nums, target) {
    let A = [];
    for (let i = 0; i < nums.length; i++) {
      A.push([nums[i], i]);
    }

    A.sort((a, b) => a[0] - b[0]);

    let i = 0, j = nums.length - 1;
    while (i < j) {
      let cur = A[i][0] + A[j][0];
      if (cur === target) {
        return [
          Math.min(A[i][1], A[j][1]),
          Math.max(A[i][1], A[j][1])
        ]
      } else if (cur < target) {
        i++;
      } else {
        j--;
      }
    }

    return [];
  }

  twoSum101224(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (i === j) continue;

        const num = nums[i] + nums[j];
        if (num === target) return [i, j];
      }
    }
  }

}