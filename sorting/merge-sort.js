function merge(arr1, arr2) {
  let i = 0,
    j = 0,
    resultArray = [];
  k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      resultArray[k++] = arr1[i++];
    } else {
      resultArray[k++] = arr2[j++];
    }
  }
  while (i < arr1.length) {
    resultArray[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    resultArray[k++] = arr2[j++];
  }
  return resultArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// merge([1,10,50],[2,14,99,100]);

mergeSort([10, 24, 76, 73, 72, 1, 9]);
