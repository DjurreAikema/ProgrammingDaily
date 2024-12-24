//noinspection Duplicates
class Solutions {
  // Best (so far)
  diameterOfBinaryTree_best(root) {
    let stack = [root];
    let seen = new Map();
    seen.set(null, [0, 0]);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let [leftHeight, leftDiameter] = seen.get(node.left);
        let [rightHeight, rightDiameter] = seen.get(node.right);

        let height = 1 + Math.max(leftHeight, rightHeight);
        let diameter =
          Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  // All solutions
  diameterOfBinaryTree241224(root) {
    let stack = [root];
    let seen = new Map();
    seen.set(null, [0, 0]);

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let [leftHeight, leftDiameter] = seen.get(node.left);
        let [rightHeight, rightDiameter] = seen.get(node.right);

        let height = 1 + Math.max(leftHeight, rightHeight);
        let diameter =
          Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }
}