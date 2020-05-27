function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
    console.log(arr);
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
