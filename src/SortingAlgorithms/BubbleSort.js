//noinspection Duplicates
class Solutions {
  // Bubble sort repeatedly swaps adjacent elements if they're in the wrong order.
  // It's simple but not very efficient for large datasets.
  bubbleSort_best(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1])
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    return arr;
  }

  // All solutions
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