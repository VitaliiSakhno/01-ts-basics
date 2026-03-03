function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }
  
  getFirstElement([1, 2, 3]);           // 1
  getFirstElement(["a", "b", "c"]);     // "a"
  getFirstElement([true, false, true]); // true
  
  