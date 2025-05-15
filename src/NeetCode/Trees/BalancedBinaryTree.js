//noinspection Duplicates
class Solutions {
  // Best (so far)
  isBalanced_best(root) {
    if (root === null) return true;

    let stack = [root];
    let seen = new Map();
    seen.set(null, 0);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let leftHeight = seen.get(node.left);
        let rightHeight = seen.get(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        const height = 1 + Math.max(leftHeight, rightHeight);
        seen.set(node, height);
      }
    }

    return true;
  }

  // All solutions
  isBalanced_150525_good(root) {
    if (!root) return true;

    const stack = [root];
    const seen = new Map();
    seen.set(null, 0);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let leftHeight = seen.get(node.left);
        let rightHeight = seen.get(node.right);

        if (Math.abs(rightHeight - leftHeight) > 1) return false;

        const height = 1 + Math.max(leftHeight, rightHeight);
        seen.set(node, height);
      }
    }

    return true;
  }

  isBalanced_140525_hard(root) {
    if (!root) return true;

    const stack = [root];
    const seen = new Map();
    seen.set(null, 0);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let leftHeight = seen.get(node.left);
        let rightHeight = seen.get(node.right);

        if (Math.abs(rightHeight - leftHeight) > 1) return false;

        let height = 1 + Math.max(leftHeight, rightHeight);
        seen.set(node, height);
      }
    }

    return true;
  }

  isBalanced_120525_hard(root) {
    if (root === null) return true;

    let stack = [root];
    let seen = new Map();
    seen.set(null, 0);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let leftHeight = seen.get(node.left);
        let rightHeight = seen.get(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        const height = 1 + Math.max(leftHeight, rightHeight);
        seen.set(node, height);
      }
    }

    return true;
  }

  isBalanced030425(root) {
    if (!root) return true;

    let stack = [root];
    let seen = new Map();
    seen.set(null, 0);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let leftHeight = seen.get(node.left);
        let rightHeight = seen.get(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        const height = 1 + Math.max(leftHeight, rightHeight);
        seen.set(node, height);
      }
    }

    return true;
  }

  isBalanced100125(root) {
    if (!root) return true;

    const stack = [root];
    const seen = new Map();
    seen.set(null, 0);

    while (stack.length) {
      let node = stack[stack.length - 1];
      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let leftDepth = seen.get(node.left);
        let rightDepth = seen.get(node.right);

        if (Math.abs(rightDepth - leftDepth) > 1) return false;

        let depth = 1 + Math.max(leftDepth, rightDepth);
        seen.set(node, depth);
      }
    }

    return true;
  }

  isBalanced070125(root) {
    if (root === null) return true;

    const stack = [root];
    const seen = new Map();
    seen.set(null, 0);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        const leftHeight = seen.get(node.left);
        const rightHeight = seen.get(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        const height = 1 + Math.max(leftHeight, rightHeight);
        seen.set(node, height);
      }
    }

    return true;
  }

  isBalanced050125(root) {
    if (root === null) return true;

    let stack = [root];
    let seen = new Map();
    seen.set(null, 0);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let leftHeight = seen.get(node.left);
        let rightHeight = seen.get(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        const height = 1 + Math.max(leftHeight, rightHeight);
        seen.set(node, height);
      }
    }

    return true;
  }
}