const { selectionSort } = require('./SelectionSort'); // 선택 정렬
const { bubbleSort } = require('./BubbleSort'); // 버블 정렬
const { insertionSort } = require('./InsertionSort'); // 삽입 정렬
const { quickSort } = require('./QuickSort'); // 퀵 정렬

const sorts = [selectionSort, bubbleSort, insertionSort];

const { case_1, case_2 } = require('../TestCase');

sorts.forEach((func) => {
  describe(`${func.name}`, () => {
    it('case_1 Test', () => {
      expect(func(case_1)).toBe(case_1.sort((a, b) => a - b));
    })
    it('case_2 Test', () => {
      expect(func(case_2)).toBe(case_2.sort((a, b) => a - b));
    });
  });
});

it('case_1 quickSort', () => {
  expect(quickSort(case_1, 0, case_1.length - 1)).toBe(case_1.sort((a, b) => a - b));
});
it('case_2 quickSort', () => {
  expect(quickSort(case_2, 0, case_2.length - 1)).toBe(case_2.sort((a, b) => a - b));
});