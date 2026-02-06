import {MaxPriorityQueue} from "@datastructures-js/priority-queue";

//noinspection Duplicates
class Solutions {
  // Best (so far)
  lastStoneWeight_best(stones) {
    // Use a MaxPriorityQueue (max heap) to efficiently get the heaviest stones
    // This automatically keeps the largest element at the front
    const maxHeap = new MaxPriorityQueue;

    // Add all stones to the priority queue
    for (const stone of stones) {
      maxHeap.enqueue(stone);
    }

    while (maxHeap.size() > 1) {
      const stone1 = maxHeap.dequeue();
      const stone2 = maxHeap.dequeue();

      if (stone1 !== stone2) {
        // Heavier stone (stone1) becomes stone1 - stone2 and goes back
        maxHeap.enqueue(stone1 - stone2);
      }
      // If stone1 === stone2, both stones are destroyed
    }

    // After all collisions, check what's left:
    // - If 1 stone remains: return its weight
    // - If 0 stones remain: return 0
    return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
  }

  // All solutions
  lastStoneWeight_060226_easy(stones) {
    const queue = new MaxPriorityQueue();

    for (const stone of stones) {
      queue.enqueue(stone);
    }

    while (queue.size() > 1) {
      const stone1 = queue.dequeue();
      const stone2 = queue.dequeue();

      if (stone1 !== stone2) {
        queue.enqueue(stone1 - stone2)
      }
    }

    return queue.size() === 1 ? queue.dequeue() : 0;
  }

  lastStoneWeight_091225_hard(stones) {
    const stack = new MaxPriorityQueue();

    for (const stone of stones) {
      stack.enqueue(stone);
    }

    while (stack.size() > 1) {
      const stone1 = stack.dequeue();
      const stone2 = stack.dequeue();

      if (stone1 > stone2) {
        stack.enqueue(stone1 - stone2);
      }
    }

    return stack.size() >= 1 ? stack.dequeue() : 0;
  }

  lastStoneWeight_090925_easy(stones) {
    const maxHeap = new MaxPriorityQueue();

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

  lastStoneWeight_050825_easy(stones) {
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

  lastStoneWeight_240725_hard(stones) {
    let maxHeap = new MaxPriorityQueue;

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

  lastStoneWeight_200625_good(stones) {
    this.maxHeap = new MaxPriorityQueue();

    for (const stone of stones) {
      this.maxHeap.enqueue(stone);
    }

    while (this.maxHeap.size() > 1) {
      const stone1 = this.maxHeap.dequeue();
      const stone2 = this.maxHeap.dequeue();

      if (stone1 !== stone2) {
        this.maxHeap.enqueue(stone1 - stone2);
      }
    }

    return this.maxHeap.size() === 1 ? this.maxHeap.dequeue() : 0;
  }

  lastStoneWeight_060625_good(stones) {
    const maxHeap = new MaxPriorityQueue();

    for (const stone of stones) {
      maxHeap.enqueue(stone);
    }

    while (maxHeap.size() > 1) {
      const stone1 = maxHeap.dequeue();
      const stone2 = maxHeap.dequeue();

      if (stone1 !== stone2) {
      }
      maxHeap.enqueue(stone1 - stone2);
    }

    return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
  }

  lastStoneWeight_280525_good(stones) {
    const maxHeap = new MaxPriorityQueue();

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

  lastStoneWeight_230525_good(stones) {
    const maxHeap = new MaxPriorityQueue();

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

  lastStoneWeight_210525_good(stones) {
    this.maxHeap = new MaxPriorityQueue();

    for (let stone of stones) {
      this.maxHeap.enqueue(stone);
    }

    while (this.maxHeap.size() > 1) {
      const stone1 = this.maxHeap.dequeue();
      const stone2 = this.maxHeap.dequeue();

      if (stone1 !== stone2) {
        this.maxHeap.enqueue(stone1 - stone2);
      }
    }

    return this.maxHeap.size() === 0 ? 0 : this.maxHeap.front();
  }

  lastStoneWeight_185025_hard(stones) {
    this.maxHeap = new MaxPriorityQueue();

    for (const stone of stones) {
      this.maxHeap.enqueue(stone);
    }

    while (this.maxHeap.size() > 1) {
      let stone1 = this.maxHeap.dequeue();
      let stone2 = this.maxHeap.dequeue();

      if (stone1 !== stone2) {
        this.maxHeap.enqueue(stone1 - stone2);
      }
    }

    return this.maxHeap.size() === 1 ? this.maxHeap.dequeue() : 0;
  }

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