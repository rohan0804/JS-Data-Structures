const swaps = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));
