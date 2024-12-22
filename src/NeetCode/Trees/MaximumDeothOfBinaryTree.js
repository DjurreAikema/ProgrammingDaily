//noinspection Duplicates
class Solutions {
  // Best (so far)
  maxDepth_best(root) {
    const stack = [[root, 1]];
    let maxDepth = 0;

    while (stack.length) {
      const curr = stack.pop();
      const node = curr[0];
      const depth = curr[1];

      if (node !== null) {
        maxDepth = Math.max(maxDepth, depth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }

  // All solutions
  maxDepth221224(root) {
    const stack = [[root, 1]];
    let maxDepth = 0;

    while (stack.length) {
      const curr = stack.pop();
      const node = curr[0];
      const depth = curr[1];

      if (node !== null) {
        maxDepth = Math.max(maxDepth, depth);
        stack.push(([node.left, depth + 1]));
        stack.push(([node.right, depth + 1]));
      }
    }

    return maxDepth;
  }

  maxDepth191224(root) {
    const stack = [[root, 1]];
    let maxDepth = 0;

    while (stack.length) {
      const curr = stack.pop();
      const node = curr[0];
      const depth = curr[1];

      if (node !== null) {
        maxDepth = Math.max(maxDepth, depth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }
}