/* 힙 정렬
  이진 트리의 일종인 힙(Heap)의 특징을 이용해 정렬하기 */

function heapSort(array) {
  return array;
}

module.exports = { heapSort };

class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    // 힙의 크기를 반환
    return this.heap.length;
  }

  swap(prev, next) {
    // 위치 변경
    [this.heap[prev], this.heap[next]] = [this.heap[next], this.heap[prev]];
  }

  add(value) {
    // 새로운 값 추가
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    // 최소힙으로 정렬
    let index = this.heap.length - 1; // 새로운 노드가 추가된 위치
    let parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 위치
    while (this.heap[parentIndex] && this.heap[index][1] < this.heap[parentIndex][1]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  poll() {
    // 최상단 루트 노드 삭제
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown() {
    let index = 0;
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;

    while (
      (this.heap[leftIndex] && this.heap[leftIndex][1] < this.heap[index][1]) ||
      (this.heap[rightIndex] && this.heap[rightIndex][1] < this.heap[index][1])
    ) {
      let smallerIndex = leftIndex;
      if (
        this.heap[rightIndex] && this.heap[rightIndex][1] < this.heap[smallerIndex][1]
      ) {
        smallerIndex = rightIndex;
      }

      this.swap(index, smallerIndex);
      index = smallerIndex;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }
  }
}