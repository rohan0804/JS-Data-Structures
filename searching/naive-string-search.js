function naiveSearch(long, short) {
  let count = 0;
  for (i = 0; i < long.length; i++) {
    for (j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lo");
