//noinspection Duplicates
class Solutions {
  // Best (so far)
  invertTree_best(root) {
    if (!root) return null;
    const queue = [root];

    while (queue.length) {
      // shift() for BFS, pop() for DFS
      const node = queue.shift();

      [node.left, node.right] = [node.right, node.left];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return root;
  }

  // All solutions
  invertTree231224(root) {
    if (!root) return null;
    // shift() for BFS, pop() for DFS
    const queue = [root];

    while (queue.length) {
      const node = queue.pop();

      [node.left, node.right] = [node.right, node.left];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return root;
  }

  invertTree221224(root) {
    if (!root) return null;
    const queue = [root];

    while (queue.length) {
      // shift() for BFS, pop() for DFS
      const node = queue.pop();

      [node.left, node.right] = [node.right, node.left];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return root;
  }

  invertTree191224(root) {
    if (!root) return null;
    const queue = [root];

    while (queue.length) {
      // shift() for BFS, pop() for DFS
      const node = queue.shift();

      [node.left, node.right] = [node.right, node.left];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return root;
  }

  invertTree171224(root) {
    if (!root) return null;
    const queue = [root];

    while (queue.length) {
      // shift() for BFS, pop() for DFS
      const node = queue.shift();

      [node.left, node.right] = [node.right, node.left];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return root;
  }
}