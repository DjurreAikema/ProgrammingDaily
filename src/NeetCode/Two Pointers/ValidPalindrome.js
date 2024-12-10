//noinspection Duplicates
class Solutions {
  // Best (so far)


  // All solutions
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