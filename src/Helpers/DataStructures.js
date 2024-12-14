// --- Linked list
export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Helper function to convert an array to a linked list
 * @param {number[]} arr
 * @return {ListNode}
 */
export function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

/**
 * Helper function to convert a linked list to an array
 * @param {ListNode} head
 * @return {number[]}
 */
export function listToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

// --- Linked list end