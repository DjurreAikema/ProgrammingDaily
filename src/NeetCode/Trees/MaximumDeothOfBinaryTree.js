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
  maxDepth271224(root) {
    const stack = [[root, 1]];
    let maxDepth = 0;

    while (stack.length) {
      const curr = stack.pop();
      const node = curr[0];
      const depth = curr[1];

      if (node !== null) {
        maxDepth = Math.max(depth, maxDepth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }

  maxDepth241224(root) {
    const stack = [[root, 1]];
    let maxDepth = 0;

    while (stack.length) {
      const curr = stack.pop();
      const node = curr[0];
      const depth = curr[1];

      if (node !== null) {
        maxDepth = Math.max(depth, maxDepth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }

  maxDepth231224(root) {
    const queue = [[root, 1]];
    let maxDepth = 0;

    while (queue.length) {
      const curr = queue.pop();
      const node = curr[0];
      const depth = curr[1];

      maxDepth = Math.max(depth, maxDepth);
      if (node) {
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }

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