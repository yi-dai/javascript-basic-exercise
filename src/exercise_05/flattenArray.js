export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (!array) {
    throw new Error('Flatten undefined or null array');
  } else {
    const result = [];
    for (let i = 0, len = array.length; i < len; i += 1) {
      if (array[i] % 1 === 0) {
        result.push(array[i]);
      } else {
        for (let j = 0, len1 = array[i].length; j < len1; j += 1) {
          result.push(array[i][j]);
        }
      }
    }
    return result;
  }
}
