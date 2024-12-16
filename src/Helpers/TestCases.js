import {arrayToList, listToArray} from "./DataStructures.js";

/**
 * @param {Solution} sol
 */
export function reverseListTestCases(sol) {
  let list = arrayToList([0, 1, 2, 3]);
  let reversedList = sol.reverseList(list);
  console.log(listToArray(reversedList));

  let list2 = arrayToList([]);
  let reversedList2 = sol.reverseList(list2);
  console.log(listToArray(reversedList2));
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