export class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Convert an array into a binary tree using level-order insertion.
 * Assumes the array represents a binary tree in level-order.
 * Uses `null` to represent missing children.
 *
 * @param {number[]} arr
 * @return {TreeNode|null}
 */
export function arrayToTree(arr) {
  if (!arr || arr.length === 0) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    let current = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

/**
 * Convert a binary tree into an array in level-order.
 * This helps visualize and verify the output tree.
 *
 * @param {TreeNode|null} root
 * @return {number[]}
 */
export function treeToArray(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }

  // Remove trailing `null` values which are not needed for the representation
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}