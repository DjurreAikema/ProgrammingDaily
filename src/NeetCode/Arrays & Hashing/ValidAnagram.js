//noinspection Duplicates
class Solutions {
  // Best (so far)
  isAnagram_best(s, t) {
    if (s.length !== t.length) return false;

    const count = Array(26).fill(0);
    // When we do s.charCodeAt(i) - 'a'.charCodeAt(0), we're essentially calculating:
    // For 'a': 97 - 97 = 0
    // For 'b': 98 - 97 = 1
    // For 'c': 99 - 97 = 2
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return count.every(val => val === 0);
  }

  // All solutions
  isAnagram_250425_hard(s, t) {
    if (s.length !== t.length) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return count.every(val => val === 0);
  }

  isAnagram070125(s, t) {
    if (s.length !== t.length) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return count.every(val => val === 0);
  }

  isAnagram231224(s, t) {
    if (s.length !== t.length) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return count.every(val => val === 0);
  }

  isAnagram181224(s, t) {
    if (s.length !== t.length) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return count.every(val => val === 0);
  }

  isAnagram161224(s, t) {
    // Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

    // An anagram is a string that contains the exact same characters as another string, but the order of the
    // characters can be different.
    if (s.length !== t.length) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s[i].charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t[i].charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    // console.log(count)
    return count.every(val => val === 0);
  }

  isAnagram131224(s, t) {
    if (s.length !== t.length) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return count.every(val => val === 0);
  }

  isAnagram121224(s, t) {
    if (s.length !== t.length) return false;

    const countS = new Map();
    const countT = {};
    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS[s[i]] || 0) + 1;
      countT[t[i]] = (countT[t[i]] || 0) + 1;
    }
    console.log(countS)
    console.log(countT)
    console.log(countS === countT)
    return
  }

  isAnagram101224(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    let res = true;
    count.forEach(item => {
      if (item !== 0) res = false;
    });

    return res;
  }

  isAnagram091124_3(s, t) {
    if (s.length !== t.length) return false;

    // Create an array of length 26, each element initialized to 0.
    // Why 26? The problem states: s and t consist of lowercase English letters.
    // There are 26 lower case letters in the English alphabet, so it creates a "count" bucket for each letter.
    const count = new Array(26).fill(0);
    // count[0] would be a
    // count[1] would be b
    // count[2] would be c
    // etc

    for (let i = 0; i < s.length; i++) {
      // By subtracting 'a'.charCodeAt(0) from each character's code its transformed into a zero-based indices.
      // 'a'.chatCodeAt(0) might be 97 in ASCII/Unicode.
      // If s[i] = 'a', s.charCodeAt(i) - 'a'.charCodeAt(0) = 97 - 97 = 0, which corresponds to count[0].
      // If s[i] = 'c', s.charCodeAt(i) - 'a'.charCodeAt(0) = 99 - 97 = 2, which corresponds to count[2].

      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--

      // If s and t contain the exact same characters in the same quantities, every increment for a character in s
      // will be matched by a decrement for the same character from t. Ultimately, all counts should return 0.
    }

    return count.every(val => val === 0);
  }

  isAnagram091124_2(s, t) {
    if (s.length !== t.length) return false;

    let sSort = s.split("").sort().join();
    let tSort = t.split("").sort().join();

    return sSort === tSort;
  }

  isAnagram091124(s, t) {
    if (s.length !== t.length) return false

    let countS = new Map();
    let countT = new Map();

    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = 1 + (countS[s[i]] ?? 0);
      countT[t[i]] = 1 + (countT[t[i]] ?? 0);
    }

    for (let j in countS) {
      if (countS[j] !== (countT[j] ?? 0)) return false;
    }

    return true;
  }

}