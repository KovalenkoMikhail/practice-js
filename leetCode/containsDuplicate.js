var containsDuplicate = function (arr) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
};
let arr = [1, 2, 3, 1];
console.log("Contains Duplicate", containsDuplicate(arr));
