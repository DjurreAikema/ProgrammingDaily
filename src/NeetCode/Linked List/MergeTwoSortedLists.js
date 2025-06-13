//noinspection Duplicates
class Solutions {
  // Best (so far)
  mergeTwoLists_best(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  // All solutions
  mergeTwoLists_130625_hard(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists_230525_hard(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists_060525_good(list1, list2) {
    const dummy = {val: 0, next: null};
    let curr = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        curr.next = list1;
        list1 = list1.next;
      } else {
        curr.next = list2;
        list2 = list2.next;
      }

      curr = curr.next;
    }

    if (list1) {
      curr.next = list1;
    } else {
      curr.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists_280425_hard(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }

      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists170125(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }

      node = node.next;
    }

    if (list1) {
      node.next = list1
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists040125(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }

      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists271224(list1, list2) {
    const dummy = {val: 0, next: null};
    let curr = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        curr.next = list1;
        list1 = list1.next;
      } else {
        curr.next = list2;
        list2 = list2.next;
      }

      curr = curr.next;
    }

    if (list1) {
      curr.next = list1;
    } else {
      curr.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists241224(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }

      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists221224(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }

      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists171224(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }

      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }

  mergeTwoLists161224(list1, list2) {
    const dummy = {val: 0, next: null};
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }
}