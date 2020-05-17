function collectoddvalues(arr) {
  let newarr = [];
  if (arr.length == 0) {
    return newarr;
  }
  if (arr[0] % 2 !== 0) {
    newarr.push(arr[0]);
  }
  newarr = newarr.concat(collectoddvalues(arr.slice(1)));
  return newarr;
}

collectoddvalues([1, 2, 3, 4, 5]);
