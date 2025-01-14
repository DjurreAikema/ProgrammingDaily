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