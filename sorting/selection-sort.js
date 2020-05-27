function selectionSort(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      console.log(lowest, i);
      swap(arr, i, lowest);
    }
  }
  return arr;
}

selectionSort([0, 2, 32, 22, 10, 19, 17]);
