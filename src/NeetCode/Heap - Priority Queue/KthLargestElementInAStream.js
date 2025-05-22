import {MinPriorityQueue} from '@datastructures-js/priority-queue';

//noinspection Duplicates
class Solutions {
  // Best (so far)
  KthLargest = class {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.minHeap = new MinPriorityQueue();
      this.k = k;

      for (const num of nums) {
        this.minHeap.enqueue(num);
      }

      while (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
      this.minHeap.enqueue(val);
      if (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
      return this.minHeap.front();
    }
  }

  // All solutions
  KthLargest_220525_good = class {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.minHeap = new MinPriorityQueue();
      this.k = k;

      for (const num of nums) {
        this.minHeap.enqueue(num);
      }

      while (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
      this.minHeap.enqueue(val);
      if (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
      return this.minHeap.front();
    }
  }

  KthLargest_180525_good = class {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.minHeap = new MinPriorityQueue;
      this.k = k;

      for (let num of nums) {
        this.minHeap.enqueue(num);
      }

      while (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
      this.minHeap.enqueue(val);
      if (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
      return this.minHeap.front();
    }
  }

  KthLargest_140525_good = class {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.minHeap = new MinPriorityQueue();
      this.k = k;

      for (const num of nums) {
        this.minHeap.enqueue(num);
      }

      while (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
      this.minHeap.enqueue(val);
      if (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
      return this.minHeap.front();
    }
  }
}