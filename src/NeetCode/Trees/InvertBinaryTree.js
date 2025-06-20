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
  invertTree_200625_good(root) {
    const stack = [root];

    while (stack.length) {
      const node = stack.pop();

      if (node !== null) {
        [node.left, node.right] = [node.right, node.left];
        stack.push(node.left);
        stack.push(node.right);
      }
    }

    return root;
  }

  invertTree_050625_good(root) {
    if (!root) return null;

    let stack = [root];

    while (stack.length) {
      let node = stack.pop();

      [node.left, node.right] = [node.right, node.left];

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }

    return root;
  }

  invertTree_280525_good(root) {
    const queue = [root];

    while (queue.length) {
      // shift() for BFS, pop() for DFS
      const node = queue.shift();

      if (node !== null) {
        [node.left, node.right] = [node.right, node.left];

        queue.push(node.left);
        queue.push(node.right);
      }
    }

    return root;
  }

  invertTree_250525_hard(root) {
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

  invertTree_210525_hard(root) {
    const stack = [root];

    while (stack.length) {
      let node = stack.pop();

      if (node !== null) {
        [node.left, node.right] = [node.right, node.left];
        stack.push(node.left);
        stack.push(node.right);
      }
    }

    return root;
  }

  invertTree_080525_hard(root) {
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

  invertTree230125(root) {
    const stack = [root];

    while (stack.length) {
      let node = stack.pop();

      if (node) {
        [node.left, node.right] = [node.right, node.left];

        stack.push(node.left);
        stack.push(node.right);
      }
    }

    return root;
  }

  invertTree040125(root) {
    if (!root) return root;
    const stack = [root];

    while (stack.length) {
      const node = stack.pop();

      [node.left, node.right] = [node.right, node.left];

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }

    return root;
  }

  invertTree271224(root) {
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