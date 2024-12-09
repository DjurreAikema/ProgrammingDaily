class Solutions {

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