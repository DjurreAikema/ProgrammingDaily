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
  reverseList_170425_good(head) {
    let prev = null, curr = head;

    while (curr) {
      let tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }

    return prev;
  }

  reverseList160425(head) {
    let prev = null, curr = head;

    while (curr) {
      let tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }

    return prev;
  }

  reverseList140125(head) {
    const dummy = {val: 0, next: head};
    let node = head;
    let prev = null;

    while (node) {
      const tempNext = node.next;
      node.next = prev;
      prev = node;
      node = tempNext;
    }

    return dummy.next;
  }

  reverseList271224(head) {
    let curr = head, prev = null;

    while (curr) {
      let tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }

    return prev;
  }

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