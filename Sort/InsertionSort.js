/* 삽입 정렬
대부분 정렬돼있다 가정하고, 적절한 위치에, 필요할 때만 요소 변경
손에 든 카드를 정리하는 것과 유사함 */

function insertionSort(array) {
  if (!Array.isArray(array)) return;

  for (let i = 0; i < array.length - 1; i++) {
    // 다음 요소(j + 1)와 비교하며 순회하므로 최대 길이 - 1만큼 순회
    let j = i; // 정렬할 대상 인덱스
    while (j >= 0 && array[j] > array[j + 1]) {
      // 대상으로부터 앞으로 이동하며 확인
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      j--;
    }
  }

  return array;
}

module.exports = { insertionSort };