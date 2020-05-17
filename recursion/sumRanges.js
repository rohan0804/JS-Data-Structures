function sumRanges(num) {
  if (num == 1) return 1;
  return num + sumranges(num - 1);
}

sumRanges(3);
