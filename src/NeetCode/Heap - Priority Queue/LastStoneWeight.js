//noinspection Duplicates
class Solutions {
  // Best (so far)
  lastStoneWeight_best(stones) {
    const maxHeap = new MaxPriorityQueue;

    for (const stone of stones) {
      maxHeap.enqueue(stone);
    }

    while (maxHeap.size() > 1) {
      const stone1 = maxHeap.dequeue();
      const stone2 = maxHeap.dequeue();

      if (stone1 !== stone2) {
        maxHeap.enqueue(stone1 - stone2);
      }
    }

    return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
  }

  // All solutions
  lastStoneWeight_150525_soloSolved(stones) {
    const maxHeap = new MaxPriorityQueue;

    for (const stone of stones) {
      maxHeap.enqueue(stone);
    }

    while (maxHeap.size() > 1) {
      let stone1 = maxHeap.dequeue();
      let stone2 = maxHeap.dequeue();
      let stone3;

      if (stone1 === stone2) {
        continue;
      } else if (stone1 > stone2) {
        stone3 = stone1 - stone2;
      } else {
        stone3 = stone2 - stone1;
      }

      maxHeap.enqueue(stone3);
    }

    if (maxHeap.front()) {
      return maxHeap.front();
    }
    return 0;
  }
}