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
  isPalindrome_220525_good(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
      while (l < r && !this.alphaNum(s[l])) l++;
      while (r > l && !this.alphaNum(s[r])) r--;

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }

    return true;
  }

  alphaNum_220525_good(c) {
    return (
      c >= 'A' && c <= 'Z'
      || c >= 'a' && c <= 'z'
      || c >= '0' && c <= '9'
    )
  }

  isPalindrome_210525_hard(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
      while (l < r && !this.alphaNum(s[l])) l++;
      while (r > l && !this.alphaNum(s[r])) r--;

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }

    return true;
  }

  alphaNum_210525_hard(c) {
    return (
      c >= 'A' && c <= 'Z'
      || c >= 'a' && c <= 'z'
      || c >= '0' && c <= '9'
    );
  }

  isPalindrome_200525_hard(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
      while (l < r && !this.alphaNum(s[l])) l++;
      while (r > l && !this.alphaNum(s[r])) r--;

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }

    return true;
  }

  alphaNum_200525_hard(c) {
    return (
      c >= 'A' && c <= 'Z'
      || c >= 'a' && c <= 'z'
      || c >= '0' && c <= '9'
    );
  }

  isPalindrome_180525_hard(s) {
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

  isPalindrome_120525_hard(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
      while(l < r && !alphaNum(s[l])) l++;
      while(r > l && !alphaNum(s[r])) r--;

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }

    return true;
  }

  isPalindrome100125(s) {
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

  isPalindrome181224(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
      while (l < r && !alphaNum(s.charAt(l))) {
        l++;
      }
      while (r > l && !alphaNum(s.charAt(r))) {
        r--;
      }

      if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  }

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