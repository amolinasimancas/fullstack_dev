// Exercise . Finding Substring Indices
const stringArray = ["apple", "banana", "orange", "grape", "banana", "kiwi"];
const target = "banana";
function findStringIndicesInArray(array, target) {
  const result = {
    includesTargetString: false,
    firstOccurenceIndex: -1,
    lastOccurenceIndex: -1,
  };
  array.forEach((element, index) => {
    if (element.includes(target)) {
      result.includesTargetString = true;
      result.firstOccurenceIndex = array.indexOf(target);
      result.lastOccurenceIndex = array.lastIndexOf(target);
    }
  });
  return result;
}
const result = findStringIndicesInArray(stringArray, target);
console.log(result);