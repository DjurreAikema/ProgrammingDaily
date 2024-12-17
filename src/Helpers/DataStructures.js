// --- Linked list
// export class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
//
// /**
//  * Helper function to convert an array to a linked list
//  * @param {number[]} arr
//  * @return {ListNode}
//  */
// export function arrayToList(arr) {
//   let dummy = new ListNode();
//   let current = dummy;
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//   }
//   return dummy.next;
// }
//
// /**
//  * Helper function to convert a linked list to an array
//  * @param {ListNode} head
//  * @return {number[]}
//  */
// export function listToArray(head) {
//   let arr = [];
//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }
//   return arr;
// }
//
// /**
//  * Converts an array to a linked list.
//  * If index >= 0, creates a cycle by linking the last node's next
//  * pointer to the node at the given index (0-based).
//  * If index = -1, no cycle is created.
//  *
//  * @param {number[]} arr - The array representing the node values
//  * @param {number} index - The position to link the tail node to form a cycle
//  * @return {ListNode} head - The head of the constructed linked list
//  */
// export function arrayToListWithCycle(arr, index) {
//   if (arr.length === 0) return null;
//
//   let dummy = new ListNode();
//   let current = dummy;
//   let cycleNode = null; // Will hold the reference of the node at 'index'
//   let count = 0;
//
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//     if (count === index) {
//       cycleNode = current;
//     }
//     count++;
//   }
//
//   // If index is not -1, and cycleNode is found, create the cycle
//   if (index !== -1 && cycleNode) {
//     current.next = cycleNode;
//   }
//
//   return dummy.next;
// }

// --- Linked list end