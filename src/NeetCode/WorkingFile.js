//noinspection Duplicates
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
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

const sol = new Solution();
console.log(sol.twoSum([3, 4, 5, 6], 7)); // [0,1]
console.log(sol.twoSum([4, 5, 6], 10)); // [0,2]
console.log(sol.twoSum([5, 5], 10)); // [0,1]