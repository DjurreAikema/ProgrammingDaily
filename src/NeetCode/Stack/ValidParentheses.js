//noinspection Duplicates
class Solutions {
  // Best (so far)


  // All solutions
  isValid121224(s) {
    if (s.length < 2) return false;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        stack.push(s[i])
      } else {
        let open = stack.pop();
        if (s[i] === ")" && open !== "(") return false;
        if (s[i] === "]" && open !== "[") return false;
        if (s[i] === "}" && open !== "{") return false;
      }
    }

    return stack.length === 0;
  }
}