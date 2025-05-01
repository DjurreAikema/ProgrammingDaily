//noinspection Duplicates
class Solutions {
  // Best (so far)
  isSameTree_best(p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length && q2.length) {
      let nodeP = q1.pop();
      let nodeQ = q2.pop();

      if (nodeP === null && nodeQ === null) continue;
      if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

      q1.push(nodeP.left);
      q1.push(nodeP.right);
      q2.push(nodeQ.left);
      q2.push(nodeQ.right);
    }

    return true;
  }

  // All solutions
  isSameTree_010525_hard(p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length && q2.length) {
      let nodeP = q1.pop();
      let nodeQ = q2.pop();

      if (nodeP === null && nodeQ === null) continue;
      if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

      q1.push(nodeP.left);
      q1.push(nodeP.right);
      q2.push(nodeQ.left);
      q2.push(nodeQ.right);
    }

    return true;
  }

  isSameTree240125(p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length && q2.length) {
      let nodeP = q1.pop();
      let nodeQ = q2.pop();

      if (nodeP === null && nodeQ === null) continue;
      if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

      q1.push(nodeP.left);
      q1.push(nodeP.right);
      q2.push(nodeQ.left);
      q2.push(nodeQ.right);
    }

    return true;
  }

  isSameTree100125(p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length && q2.length) {
      let nodeP = q1.pop();
      let nodeQ = q2.pop();

      if (nodeP === null && nodeQ === null) continue;
      if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

      q1.push(nodeP.left);
      q1.push(nodeP.right);
      q2.push(nodeQ.left);
      q2.push(nodeQ.right);
    }

    return true;
  }

  isSameTree070125(p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length && q2.length) {
      let nodeP = q1.pop();
      let nodeQ = q2.pop();

      if (nodeP === null && nodeQ === null) continue;
      if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

      q1.push(nodeP.left);
      q1.push(nodeP.right);
      q2.push(nodeQ.left);
      q2.push(nodeQ.right);
    }

    return true;
  }
}