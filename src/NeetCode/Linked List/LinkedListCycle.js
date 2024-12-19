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