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