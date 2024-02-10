// add whatever parameters you deem necessary & write docstring

/**
 * averagePair:
 * given a sorted array of numbers and a target number average
 * determine if the average of a pair of nums equals the target number
 *
 * input: sorted array
 * output: boolean (true / false)
 *
 * [1, 2, 3], 2.5 => true
 * [3, 3, 6, 12, 19], 8 => false
 * [1, 2, 3], 2 => true
 * [], 4 => false
 *
 * this code will use pointers
 *
 * put 2 pointers on the sorted array
 *   one in the front (index 0)
 *   one in the back (index array.length -1)
 *
 * take value of pointer 1 & 2 and get the average
 * if target > average, decrement pointer 2
 * if target < average, increment pointer 1
 *
 */

/** given a sorted array of numbers and a target number average
 *  determine if the average of a pair of nums equals the target number
 *
 *  time complexity: O(n)
 * */

function averagePair(arr, targetAvg) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  if (arr.length < 2) {
    return false;
  }

  while (leftPointer < rightPointer) {
    const average = (arr[leftPointer] + arr[rightPointer]) / 2;
    if (targetAvg === average) {
      return true;
    } else if (targetAvg > average) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return false;
}

