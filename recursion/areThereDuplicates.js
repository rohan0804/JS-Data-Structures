function areThereDuplicates() {
  console.log(new Set(arguments).size);
  return new Set(arguments).size !== arguments.length;
}
areThereDuplicates(1, 2, 3, 4, 5, 6, 4);
