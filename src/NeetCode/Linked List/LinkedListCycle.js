//noinspection Duplicates
class Solutions {
  // Best (so far)
  hasCycle_best(head) {
    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }

  // All solutions
  hasCycle_060525_good(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }

  hasCycle180325(head) {
    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }

  hasCycle240225(head) {
    let slow = head, fast = head.next;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true
      }
    }

    return false;
  }

  hasCycle050125(head) {
    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }

  hasCycle271224(head) {
    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }

  hasCycle221224(head) {
    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }

  hasCycle201224(head) {
    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }

  hasCycle191224(head) {
    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }

  hasCycle171224(head) {
    const visited = new Map();
    let curr = head;

    let i = 0;
    while (curr && i < 4) {
      console.log(visited.get(curr))
      if (visited[curr]) {
        return false;
      } else {
        visited.set(curr, curr.val)
      }

      // console.log(visited)
      curr = curr.next;
      i++;
    }

    console.log(visited)
    return true;
  }
}