const { selectionSort } = require('./SelectionSort'); // 선택 정렬
const { bubbleSort } = require('./BubbleSort'); // 버블 정렬
const { insertionSort } = require('./InsertionSort'); // 삽입 정렬
const { quickSort } = require('./QuickSort'); // 퀵 정렬
const { mergeSort } = require('./MergeSort'); // 병합 정렬

const sorts = [selectionSort, bubbleSort, insertionSort, mergeSort];

const { case_1, case_2, case_3, case_4 } = require('../TestCase');

sorts.forEach((func) => {
  describe(`${func.name}`, () => {
    it('case_1 Test', () => {
      expect(func([...case_1])).toEqual([...case_1].sort((a, b) => a - b));
    })
    it('case_2 Test', () => {
      expect(func([...case_2])).toEqual([...case_2].sort((a, b) => a - b));
    });
    it('case_3 Test', () => {
      expect(func([...case_3])).toEqual([...case_3].sort((a, b) => a - b));
    });
    it('case_4 Test', () => {
      expect(func([...case_4])).toEqual([...case_4].sort((a, b) => a - b));
    });
  });
});

describe('quickSort', () => {
  it('case_1 Test', () => {
    expect(quickSort([...case_1], 0, case_1.length - 1)).toEqual([...case_1].sort((a, b) => a - b));
  });
  it('case_2 Test', () => {
    expect(quickSort([...case_2], 0, case_2.length - 1)).toEqual([...case_2].sort((a, b) => a - b));
  });
  it('case_3 Test', () => {
    expect(quickSort([...case_3], 0, case_3.length - 1)).toEqual([...case_3].sort((a, b) => a - b));
  });
  it('case_4 Test', () => {
    expect(quickSort([...case_4], 0, case_4.length - 1)).toEqual([...case_4].sort((a, b) => a - b));
  });
});