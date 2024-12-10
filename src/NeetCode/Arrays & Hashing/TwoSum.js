//noinspection Duplicates
class Solutions {

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