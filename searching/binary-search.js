function binarySearch(arr, elem) {
  let start = 0,
    end = arr.length - 1;
  middle = Math.floor(start + end) / 2;
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor(start + end) / 2;
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([1, 2, 12, 15, 17, 18, 78], 12);
