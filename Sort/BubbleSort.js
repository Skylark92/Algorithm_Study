/* 버블 정렬
바로 옆에 있는 것과 비교하여 작은 것을 앞으로 보내기
오히려 큰 것을 뒤로 보낸다는 것이 맞을 지도 */

function bubbleSort(array) {
  if (!Array.isArray(array)) return;

  for (let i = 0; i < array.length; i++) {
    // 전체를 순회하면서
    for (let j = 0; j < array.length - i; j++) {
      // 한 번의 순회에서 가장 큰 값이 마지막에 위치하므로,
      // 각 순회에서 해당 값들을 건너뛰어도 된다
      // 따라서 array.length - i 만큼 순회
      if (array[j] > array[j + 1]) {
        let temp = array[j]; // 위치를 바꾸기 위한 임시 변수
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

module.exports = { bubbleSort };