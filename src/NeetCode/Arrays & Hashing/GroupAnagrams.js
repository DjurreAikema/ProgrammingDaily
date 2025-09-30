//noinspection Duplicates
class Solutions {
  // Best (so far)
  groupAnagrams_best(strs) {
    const res = {};
    for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }
    return Object.values(res);
  }

  // All solutions
  groupAnagrams_300925_good(strs) {
    let res = {};
    for (const s of strs) {
      const count = new Array(26).fill(0);
      for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      const key = count.join(',');
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }

    return Object.values(res);
  }

  groupAnagrams_270925_good(strs) {
    let res = {};
    for (const s of strs) {
      const count = new Array(26).fill(0);
      for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }

    return Object.values(res);
  }

  groupAnagrams_250925_good(strs) {
    const res = {};

    for (const s of strs) {
      const count = new Array(26).fill(0);
      for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }

    return Object.values(res);
  }

  groupAnagrams_240925_hard(strs) {
    let res = {};

    for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c in s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }

    return Object.values(res);
  }

  groupAnagrams_first_cheated(strs) {
    const res = {};
    for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }
    return Object.values(res);
  }
}