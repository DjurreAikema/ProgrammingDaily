//noinspection Duplicates
class Solutions {
  // Best (so far)
  isValid_best(s) {
    const stack = [];
    const closeToOpen = {
      ')': '(',
      ']': '[',
      '}': '{'
    }

    for (let c of s) {
      // If c is a closing character
      if (closeToOpen[c]) {
        if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(c);
      }
    }

    return stack.length === 0;
  }

  // All solutions
  isValid161224(s) {
    const stack = [];
    const closeToOpen = {
      ')': '(',
      ']': '[',
      '}': '{'
    }

    for (let c of s) {
      // Is c a closing character
      if (closeToOpen[c]) {
        if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(c);
      }
    }

    return stack.length === 0;
  }

  isValid151224(s) {
    const stack = [];
    const closeToOpen = {
      ')': '(',
      ']': '[',
      '}': '{'
    }

    for (let c of s) {
      // If c is a closing character
      if (closeToOpen[c]) {
        if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(c);
      }
    }

    return stack.length === 0;
  }

  isValid141224(s) {
    if (s.length < 2) return false;
    let stack = [];
    const closeToOpen = {
      ')': '(',
      ']': '[',
      '}': '{',
    }

    for (let i = 0; i < s.length; i++) {
      if (closeToOpen[s[i]]) {
        const last = stack.pop();
        if (closeToOpen[s[i]] !== last) return false;
      } else {
        stack.push(s[i]);
      }
    }

    return stack.length === 0;
  }

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