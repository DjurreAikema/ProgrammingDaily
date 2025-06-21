//noinspection Duplicates
class Solutions {
  // Best (so far)
  isSubtree_best(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree_best(root, subRoot)) return true;
    return (
      this.isSubtree_best(root.left, subRoot)
      || this.isSubtree_best(root.right, subRoot)
    );
  }

  sameTree_best(root, subRoot) {
    if (!root && !subRoot) return true;
    if (root && subRoot && root.val === subRoot.val) {
      return (
        this.sameTree_best(root.left, subRoot.left)
        && this.sameTree_best(root.right, subRoot.right)
      );
    }
    return false;
  }

  // All solutions
  isSubtree_210625_good(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree_210625_good(root, sub) {
    if (!root && !sub) return true;
    if (root !== null && sub !== null && root.val === sub.val) {
      return (
        this.sameTree(root.left, sub.left)
        && this.sameTree(root.right, sub.right)
      );
    }
    return false;
  }

  isSubtree_030625_good(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    )
  }

  sameTree_030625_good(root, sub) {
    if (!root && !sub) return true;
    if (root && sub && root.val === sub.val) {
      return (
        this.sameTree(root.left, sub.left)
        && this.sameTree(root.right, sub.right)
      );
    }
    return false;
  }

  isSubtree_210525_good(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree_210525_good(root, sub) {
    if (!root && !sub) return true;
    if (root && sub && root.val === sub.val) {
      return (
        this.sameTree(root.left, sub.left)
        && this.sameTree(root.right, sub.right)
      );
    }
    return false;
  }

  isSubtree_150525_good(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    )
  }

  sameTree_150525_good(root, sub) {
    if (!root && !sub) return true;
    if (root && sub && root.val === sub.val) {
      return (
        this.sameTree(root.left, sub.left)
        && this.sameTree(root.right, sub.right)
      )
    }
    return false;
  }

  isSubtree_110525_good(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree_110525_good(root, sub) {
    if (!root && !sub) return true;
    if (root && sub && root.val === sub.val) {
      return (
        this.sameTree(root.left, sub.left)
        && this.sameTree(root.right, sub.right)
      );
    }
    return false;
  }

  isSubtree_070525_good(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    )
  }

  sameTree_070525_good(root, sub) {
    if (!root && !sub) return true;
    if (root && sub && root.val === sub.val) {
      return (
        this.sameTree(root.right, sub.right)
        && this.sameTree(root.left, sub.left)
      );
    }
    return false;
  }

  isSubtree_020525_hard(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    )
  }

  sameTree_020525_hard(root, sub) {
    if (!root && !sub) return true;
    if (root && sub && root.val === sub.val) {
      return (
        this.sameTree(root.left, sub.left)
        && this.sameTree(root.right, sub.right)
      );
    }
    return false;
  }

  isSubtree090425(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree090425(root, subRoot) {
    if (!root && !subRoot) return true;
    if (root && subRoot && root.val === subRoot.val) {
      return (
        this.sameTree(root.left, subRoot.left)
        && this.sameTree(root.right, subRoot.right)
      );
    }
    return false;
  }

  isSubtree240225(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree240225(root, subRoot) {
    if (!root && !subRoot) return true;
    if (root && subRoot && root.val === subRoot.val) {
      return (
        this.sameTree(root.left, subRoot.left)
        && this.sameTree(root.right, subRoot.right)
      );
    }
    return false;
  }

  isSubtree020225(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.isTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.right, subRoot)
      || this.isSubtree(root.left, subRoot)
    )
  }

  isTree020225(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot || root.val !== subRoot.val) return false
    return (
      this.isTree(root.left, subRoot.left)
      && this.isTree(root.right, subRoot.right)
    )
  }

  isSubtree140125(root, subRoot) {
    if (subRoot === null) return true;
    if (root === null) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    )
  }

  sameTree140125(root, subRoot) {
    if (root === null && subRoot === null) return true;
    if (root && subRoot && root.val === subRoot.val) {
      return (
        this.sameTree(root.left, subRoot.left)
        && this.sameTree(root.right, subRoot.right)
      )
    }
    return false;
  }

  isSubtree100125(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree100125(root, subRoot) {
    if (!root && !subRoot) return true;
    if (root && subRoot && root.val === subRoot.val) {
      return (
        this.sameTree(root.left, subRoot.left)
        && this.sameTree(root.right, subRoot.right)
      );
    }
    return false;
  }

  isSubtree090125(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot.left)
      || this.isSubtree(root.right, subRoot.right)
    )
  }

  sameTree090125(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot || root.val === subRoot.val) {
      return(
        this.sameTree(root.left, subRoot)
        && this.sameTree(root.right, subRoot)
      )
    }
    return false;
  }

  isSubtree070125(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) return true;
    return (
      this.isSubtree(root.left, subRoot)
      || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree070125(root, subRoot) {
    if (!root && !subRoot) return true;
    if (root && subRoot && root.val === subRoot.val) {
      return (
        this.sameTree(root.left, subRoot.left)
        && this.sameTree(root.right, subRoot.right)
      );
    }
    return false;
  }
}