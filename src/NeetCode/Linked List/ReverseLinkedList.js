//noinspection Duplicates
class Solutions {
  // Best (so far)
  reverseList_best(head) {
    let prev = null, curr = head;

    while (curr) {
      let tempNext = curr.next
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }

    return prev;
  }

  // All solutions
  reverseList191224(head) {
    let prev = null, curr = head;

    while (curr) {
      const tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }

    return prev;
  }

  reverseList161224(head) {
    let prev = null, curr = head;

    while (curr) {
      let tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }

    return prev;
  }

  reverseList151224(head) {
    let prev = null, curr = head;

    while (curr) {
      let tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }

    return prev;
  }

  reverseList141224(head) {
    let prev = null, curr = head;

    while (curr) {
      let tempNext = curr.next
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }

    return prev;
  }
}