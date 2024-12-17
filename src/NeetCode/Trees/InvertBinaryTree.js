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