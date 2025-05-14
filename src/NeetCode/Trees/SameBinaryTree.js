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
  isSameTree_140525_good(p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length && q2.length) {
      const nodeP = q1.pop();
      const nodeQ = q2.pop();

      if (nodeP === null && nodeQ === null) continue;
      if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

      q1.push(nodeP.left);
      q1.push(nodeP.right);
      q2.push(nodeQ.left);
      q2.push(nodeQ.right);
    }

    return true;
  }

  isSameTree_120525_easy(p, q) {
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

  isSameTree_110525_good(p, q) {
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

  isSameTree_100525_hard(p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length && q2.length) {
      let nodeQ = q1.pop();
      let nodeP = q2.pop();

      if (nodeP === null && nodeQ === null) continue;
      if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

      q1.push(nodeQ.left);
      q1.push(nodeQ.right);
      q2.push(nodeP.left);
      q2.push(nodeP.right);
    }

    return true;
  }

  isSameTree_060525_good(p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length && q2.length) {
      const nodeP = q1.pop();
      const nodeQ = q2.pop();

      if (nodeP === null && nodeQ === null) continue;
      if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

      q1.push(nodeP.left);
      q1.push(nodeP.right);
      q2.push(nodeQ.left);
      q2.push(nodeQ.right);
    }

    return true;
  }

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