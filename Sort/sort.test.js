const { selectionSort } = require('./SelectionSort'); // 선택 정렬
const { bubbleSort } = require('./BubbleSort'); // 버블 정렬
const { insertionSort } = require('./InsertionSort'); // 삽입 정렬

const sorts = [selectionSort, bubbleSort, insertionSort];

const { case_1, case_2 } = require('../TestCase');

sorts.forEach((func) => {
  describe(`${func.name}`, () => {
    it('case_1 Test', () => {
      expect(selectionSort(case_1)).toBe(case_1.sort((a, b) => a - b));
    })
    it('case_2 Test', () => {
      expect(selectionSort(case_2)).toBe(case_2.sort((a, b) => a - b))
    });
  });
})