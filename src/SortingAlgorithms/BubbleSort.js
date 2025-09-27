//noinspection Duplicates
class Solutions {
  // Bubble sort repeatedly swaps adjacent elements if they're in the wrong order.
  // It's simple but not very efficient for large datasets.
  bubbleSort_best(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1])
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    return arr;
  }

  // All solutions
  bubbleSort_270925_hard(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //   for (let j =)
    // }
  }

  bubbleSort_200625_good(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1])
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    return nums;
  }

  bubbleSort_090525_good(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1])
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }

    return nums;
  }

  bubbleSort_240425_hard(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1])
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }

    return nums;
  }

  bubbleSort240125(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1])
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    return arr;
  }

  bubbleSort140125(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1])
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    return arr;
  }

  bubbleSort100125(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1])
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    return arr;
  }

  bubbleSort070125(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1])
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    return arr;
  }
}