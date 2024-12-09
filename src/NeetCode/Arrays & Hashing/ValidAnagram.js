class Solutions {

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