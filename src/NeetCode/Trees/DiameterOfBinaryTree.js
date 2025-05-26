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
  diameterOfBinaryTree_260525_good(root) {
    const stack = [root];
    const seen = new Map();
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
        let [rightHeight, rightDiameter] = seen.get(node.right)

        let height = 1 + Math.max(leftHeight, rightHeight);
        let diameter =
          Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  diameterOfBinaryTree_210525_good(root) {
    const stack = [root];
    const seen = new Map();
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
        let diameter = Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  diameterOfBinaryTree_160525_good(root) {
    const stack = [root];
    const seen = new Map();
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

  diameterOfBinaryTree_130525_hard(root) {
    const stack = [root];
    const seen = new Map();
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
        let diameter = Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  diameterOfBinaryTree_080525_hard(root) {
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
          Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter))

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  diameterOfBinaryTree140425(root) {
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

  diameterOfBinaryTree230125(root) {
    const stack = [root];
    const seen = new Map();
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
        let diameter = Math.max(
          leftHeight + rightHeight,
          Math.max(leftDiameter, rightDiameter)
        );

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  diameterOfBinaryTree100125(root) {
    const stack = [root];
    const seen = new Map();
    seen.set(null, [0, 0]);

    while (stack.length) {
      let node = stack[stack.length - 1];
      if (node.left && !seen.has(node.left)) {
        stack.push(node.left);
      } else if (node.right && !seen.has(node.right)) {
        stack.push(node.right);
      } else {
        node = stack.pop();

        let [leftDepth, leftDiameter] = seen.get(node.left);
        let [rightDepth, rightDiameter] = seen.get(node.right);

        let height = 1 + Math.max(leftDepth, rightDepth);
        let diameter = Math.max(
          leftDepth + rightDepth,
          Math.max(leftDiameter, rightDiameter)
        );

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  diameterOfBinaryTree070125(root) {
    const stack = [root];
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

        const height = 1 + Math.max(leftHeight, rightHeight);
        const diameter = Math.max(
          leftHeight + rightHeight,
          Math.max(leftDiameter, rightDiameter)
        );

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  diameterOfBinaryTree050125(root) {
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
        let diameter = Math.max(
          leftHeight + rightHeight,
          Math.max(leftDiameter, rightDiameter)
        );

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

  diameterOfBinaryTree271224(root) {
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

        const height = 1 + Math.max(leftHeight, rightHeight);
        const diameter = Math.max(
          leftHeight + rightHeight,
          Math.max(leftDiameter, rightDiameter)
        )

        seen.set(node, [height, diameter]);
      }
    }

    return seen.get(root)[1];
  }

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