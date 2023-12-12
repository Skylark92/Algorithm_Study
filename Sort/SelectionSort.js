/* 선택 정렬
가장 작은 것을 선택해 앞으로 보내기 */

function selectionSort(array) {
  if (typeof array !== 'object') return;
  if (!array.length) return;

  for (let i = 0; i < array.length; i++) {
    // 전체를 순회하면서
    let index = null; // 인덱스 저장, 최소값의 위치와 맨 앞 요소를 바꿔주기 위함
    let min = Infinity; // 최소값 저장

    for (let j = i; j < array.length; j++) {
      // 한 번의 순회에서 가장 앞에 최소값을 위치시키므로,
      // 각 순회마다 해당 값들은 건너뛰어도 된다
      // 따라서 j = i부터 시작하는 반복문
      if (array[j] < min) {
        // 최소값 보다 작은 수인 경우 그 수를 최소값으로 갱신
        min = array[j];
        // 최소값의 인덱스
        index = j;
      }
    }

    let temp = array[i]; // 자리를 바꾸기 위한 임시 변수
    array[i] = array[index];
    array[index] = temp;
  }

  return array; // 정렬된 array 반환
}

module.exports = { selectionSort };