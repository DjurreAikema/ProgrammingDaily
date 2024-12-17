import {arrayToList, arrayToListWithCycle, listToArray} from "../DataStructures/LinkedList.js";

/**
 * @param {Solution} sol
 */
export function linkedListCycleDetectionTestCases(sol) {
  let head1 = arrayToListWithCycle([1,2,3,4], 1);
  console.log(sol.hasCycle(head1), "true");

  let head2 = arrayToListWithCycle([1,2], -1);
  console.log(sol.hasCycle(head2), "false");
}

/**
 * @param {Solution} sol
 */
export function binarySearchTestCases(sol) {
  console.log(sol.search([-1, 0, 2, 4, 6, 8], 4), "3");
  console.log(sol.search([-1, 0, 2, 4, 6, 8], 3), "-1");
}

/**
 * @param {Solution} sol
 */
export function mergeTwoSortedLinkedListsTestCases(sol) {
  let list11 = arrayToList([1,2,4]);
  let list12 = arrayToList([1,3,5]);
  let mergedList = sol.mergeTwoLists(list11, list12);
  console.log(listToArray(mergedList), "[1,1,2,3,4,5]");

  let list21 = arrayToList([]);
  let list22 = arrayToList([1,2]);
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
export function reverseListTestCases(sol) {
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