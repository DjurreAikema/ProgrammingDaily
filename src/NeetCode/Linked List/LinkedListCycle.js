//noinspection Duplicates
class Solutions {
  // Best (so far)


  // All solutions
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