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
  maxDepth_230525_good(root) {
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

  maxDepth_160525_good(root) {
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

  maxDepth_110525_good(root) {
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

  maxDepth_070525_hard(root) {
    const stack = [[root, 1]];
    let maxDepth = 0;

    while (stack.length) {
      const curr = stack.pop();
      const node = curr[0];
      const depth = curr[1];

      if (node !== null) {
        maxDepth = Math.max(depth, maxDepth);
        stack.push([node.left, depth + 1]);
        stack.push([node.left, depth + 1]);
      }
    }

    return maxDepth;
  }

  maxDepth_220425_hard(root) {
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

  maxDepth240125(root) {
    const stack = [[root, 1]];
    let maxDepth = 0;

    while (stack.length) {
      const curr = stack.pop();
      const node = curr[0];
      const depth = curr[1];

      if (node) {
        maxDepth = Math.max(depth, maxDepth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }

  maxDepth100125(root) {
    const stack = [[root, 1]];
    let maxDepth = 0;

    while (stack.length) {
      const curr = stack.pop();
      const node = curr[0];
      const depth = curr[1];

      if (node) {
        maxDepth = Math.max(depth, maxDepth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }

  maxDepth070125(root) {
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

  maxDepth050125(root) {
    const stack = [[root, 0]];
    let maxDepth = 0;

    while (stack.length) {
      const node = stack.pop();
      const curr = node[0];
      const depth = node[1];

      if (curr !== null) {
        maxDepth = Math.max(depth, maxDepth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }

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