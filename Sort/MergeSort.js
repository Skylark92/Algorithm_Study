/* 병합 정렬
최소단위까지 반으로 나눈 뒤, 합치면서 정렬를 수행하는 정렬 */

function mergeSort(array) {
  // 정렬할 함수를 분할하는 함수
  if (!Array.isArray(array)) return;

  if (array.length <= 1) return array; // 분할 후에 원소가 없거나 하나 남은 경우 그대로 return

  const mid = array.length / 2;
  const left = array.slice(0, mid); // 분할 후 앞 배열
  const right = array.slice(mid); // 분할 후 뒷 배열

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // 분할된 배열을 정렬하며 합치는 함수
  const result = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

module.exports = { mergeSort };