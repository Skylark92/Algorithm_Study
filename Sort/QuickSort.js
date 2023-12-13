/* 퀵 정렬
특정한 값을 기준으로 작은 요소는 왼쪽에, 큰 요소는 오른쪽에 배치한 후
끝나면 왼쪽과 오른쪽 그룹에 동일한 작업 수행 */

function quickSort(array, start, end) {
  if (!Array.isArray(array)) return;
  if (!(Number.isInteger(start) && Number.isInteger(end))) return;

  if (start >= end) return; // 마지막 단계 등 원소가 하나인 경우 더이상 재귀하지 않게

  let pivot = start; // 첫 번째 원소를 pivot으로
  let i = start + 1; // pivot 값 보다 큰 원소를 오른쪽에 두기 위한 인덱스
  let j = end; // pivot 값 보다 작은 원소를 왼쪽에 두기 위한 인덱스

  while (i <= j) {
    // i와 j가 엇갈릴 때까지 반복
    while (i <= end && array[i] <= array[pivot]) {
      // pivot 값 보다 작은 값이 있다면 pivot이 위치를 잡을 때까지 ++
      i++;
    }
    while (j > start && array[j] >= array[pivot]) {
      // pivot 값 보다 큰 값이 있다면 --
      j--;
    }

    let temp; // 자리를 바꾸기 위한 임시 변수
    if (i > j) {
      // i와 j가 엇갈린 경우 pivot 값과 교체
      temp = array[j];
      array[j] = array[pivot];
      array[pivot] = temp;
    } else {
      // i와 j가 엇갈리지 않은 경우 i와 j를 교체
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  quickSort(array, start, j - 1);
  quickSort(array, j + 1, end);

  return array;
};

module.exports = { quickSort };