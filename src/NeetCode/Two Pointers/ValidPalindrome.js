import {alphaNum} from "../../Helpers/Helpers";

//noinspection Duplicates
class Solutions {
  // Best (so far)
  isPalindrome101224_best(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
      while (l < r && !alphaNum(s[l])) l++;
      while (r > l && !alphaNum(s[r])) r--;

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }

    return true;
  }

  // All solutions
  isPalindrome121224(s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
      while (l < r && !alphaNum(s[l])) {
        l++;
      }
      while (r > l && !alphaNum(s[r])) {
        r--;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  }

  isPalindrome101224_2(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
      while (l < r && !alphaNum(s[l])) l++;
      while (r > l && !alphaNum(s[r])) r--;

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }

    return true;
  }

  isPalindrome101224(s) {
    const trimmedString = s.replace(/\W/g, '').toLowerCase();

    let j = trimmedString.length - 1;
    for (let i = 0; i < j; i++) {
      if (trimmedString.charAt(i) !== trimmedString.charAt(j)) return false;
      j--;
    }

    return true;
  }
}