import {arrayToList, arrayToListWithCycle, listToArray} from "../DataStructures/LinkedList.js";
import {arrayToTree, treeToArray} from "../DataStructures/BinaryTree.js";

/**
 * @param {Solution} sol
 */
export function lastStoneWeightTestCases(sol) {
  console.log(sol.lastStoneWeight([2, 3, 6, 2, 4]), "1");
  console.log(sol.lastStoneWeight([1, 2]), "1");
  console.log(sol.lastStoneWeight([2, 2]), "0");
}

/**
 * @param {Solution} sol
 */
export function kthLargestElementInStreamTestCases(sol) {
  const kthLargest = new sol.KthLargest(3, [1, 2, 3, 3]);
  console.log(kthLargest.add(3), "3");
  console.log(kthLargest.add(5), "3");
  console.log(kthLargest.add(6), "3");
  console.log(kthLargest.add(7), "5");
  console.log(kthLargest.add(8), "6");
}

/**
 * @param {Solution} sol
 */
export function climbingStairsTestCases(sol) {
  console.log(sol.climbStairs(2), "2");
  console.log(sol.climbStairs(3), "3");
}

/**
 * @param {Solution} sol
 */
export function subtreeOfAnotherTreeTestCases(sol) {
  console.log(sol.isSubtree(arrayToTree([1, 2, 3, 4, 5]), arrayToTree([2, 4, 5])), "true");
  console.log(sol.isSubtree(arrayToTree([1, 2, 3, 4, 5, null, null, 6]), arrayToTree([2, 4, 5])), "false");
}

/**
 * @param {Solution} sol
 */
export function sameBinaryTreeTestCases(sol) {
  console.log(sol.isSameTree(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3])), "true");
  console.log(sol.isSameTree(arrayToTree([4, 7]), arrayToTree([4, null, 7])), "false");
  console.log(sol.isSameTree(arrayToTree([1, 2, 3]), arrayToTree([1, 3, 2])), "false");
}

/**
 * @param {Solution} sol
 */
export function balancedBinaryTreeTestCases(sol) {
  console.log(sol.isBalanced(arrayToTree([1, 2, 3, null, null, 4])), "true");
  console.log(sol.isBalanced(arrayToTree([1, 2, 3, null, null, 4, null, 5])), "false");
  console.log(sol.isBalanced(arrayToTree([])), "true");
}

/**
 * @param {Solution} sol
 */
export function diameterOfBinaryTreeTestCases(sol) {
  console.log(sol.diameterOfBinaryTree(arrayToTree([1, null, 2, 3, 4, 5])), "3");
  console.log(sol.diameterOfBinaryTree(arrayToTree([1, 2, 3])), "2");
}

/**
 * @param {Solution} sol
 */
export function twoSumTestCases(sol) {
  console.log(sol.twoSum([3, 4, 5, 6], 7), "[0,1]");
  console.log(sol.twoSum([4, 5, 6], 10), "[0,2]");
  console.log(sol.twoSum([5, 5], 10), "[0,1]");
}

/**
 * @param {Solution} sol
 */
export function containsDuplicateTestCases(sol) {
  console.log(sol.hasDuplicate([1, 2, 3, 3]), "True");
  console.log(sol.hasDuplicate([1, 2, 3, 4]), "False");
}

/**
 * @param {Solution} sol
 */
export function maximumDepthOfBinaryTreeTestCases(sol) {
  let tree1 = arrayToTree([1, 2, 3, null, null, 4]);
  console.log(sol.maxDepth(tree1), "3");

  let tree2 = arrayToTree([]);
  console.log(sol.maxDepth(tree2), "0");
}

/**
 * @param {Solution} sol
 */
export function validPalindromeTestCases(sol) {
  console.log(sol.isPalindrome("Was it a car or a cat I saw?"), "True");
  console.log(sol.isPalindrome("tab a cat"), "False");
  console.log(sol.isPalindrome("ab"), "False");
}

/**
 * @param {Solution} sol
 */
export function invertBinaryTreeTestCases(sol) {
  let tree1 = arrayToTree([1, 2, 3, 4, 5, 6, 7]);
  let inverted1 = sol.invertTree(tree1);
  console.log(treeToArray(inverted1), "[1,3,2,7,6,5,4]");

  let tree2 = arrayToTree([3, 2, 1]);
  let inverted2 = sol.invertTree(tree2);
  console.log(treeToArray(inverted2), "[3,1,2]");

  let tree3 = arrayToTree([]);
  let inverted3 = sol.invertTree(tree3);
  console.log(treeToArray(inverted3), "[]");
}

/**
 * @param {Solution} sol
 */
export function linkedListCycleDetectionTestCases(sol) {
  let head1 = arrayToListWithCycle([1, 2, 3, 4], 1);
  console.log(sol.hasCycle(head1), "true");

  let head2 = arrayToListWithCycle([1, 2], -1);
  console.log(sol.hasCycle(head2), "false");
}

/**
 * @param {Solution} sol
 */
export function binarySearchTestCases(sol) {
  console.log(sol.search([-1, 0, 2, 4, 6, 8], 4), "3");
  console.log(sol.search([-1, 0, 2, 4, 6, 8], 3), "-1");
  console.log(sol.search([-1, 0, 3, 5, 9, 12], 9), "4");
}

/**
 * @param {Solution} sol
 */
export function mergeTwoSortedLinkedListsTestCases(sol) {
  let list11 = arrayToList([1, 2, 4]);
  let list12 = arrayToList([1, 3, 5]);
  let mergedList = sol.mergeTwoLists(list11, list12);
  console.log(listToArray(mergedList), "[1,1,2,3,4,5]");

  let list21 = arrayToList([]);
  let list22 = arrayToList([1, 2]);
  let mergedList2 = sol.mergeTwoLists(list21, list22);
  console.log(listToArray(mergedList2), "[1,2]");

  let list31 = arrayToList([]);
  let list32 = arrayToList([]);
  let mergedList3 = sol.mergeTwoLists(list31, list32);
  console.log(listToArray(mergedList3), "[]");
}

/**
 * @param {Solution} sol
 */
export function reverseLinkedListTestCases(sol) {
  let list = arrayToList([0, 1, 2, 3]);
  let reversedList = sol.reverseList(list);
  console.log(listToArray(reversedList), "[3,2,1,0]");

  let list2 = arrayToList([]);
  let reversedList2 = sol.reverseList(list2);
  console.log(listToArray(reversedList2), "[]");
}

/**
 * @param {Solution} sol
 */
export function validParenthesesTestCases(sol) {
  console.log(sol.isValid("[]"), "true");
  console.log(sol.isValid("([{}])"), "true");
  console.log(sol.isValid("[(])"), "false");
}

/**
 * @param {Solution} sol
 */
export function bestTimeToBuyAndSellStockTestCases(sol) {
  console.log(sol.maxProfit([10, 1, 5, 6, 7, 1]), "6");
  console.log(sol.maxProfit([10, 8, 7, 5, 2]), "0");
}

/**
 * @param {Solution} sol
 */
export function validAnagramTestCases(sol) {
  console.log(sol.isAnagram("racecar", "carrace"), "true");
  console.log(sol.isAnagram("jar", "jam"), "false");
}