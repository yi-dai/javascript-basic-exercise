export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  let result;
  let a1;
  let index;
  let target;
  if (string === null || string === undefined) {
    result = 0;
  } else if (prediction) {
    a1 = prediction.toString();
    index = a1.indexOf('\'');
    target = a1[index + 1];
    result = target.toString();
    a1 = string.toString();
    index = a1.split(result);
    result = 1;
    for (let i = 0; i < index.length; i += 1) {
      if (index[i].length === 0) {
        result += 1;
      }
    }
  } else {
    result = string.length;
  }
  return result;
}
