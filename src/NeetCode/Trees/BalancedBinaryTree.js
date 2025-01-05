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