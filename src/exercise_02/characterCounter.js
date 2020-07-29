export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  let result;
  if (string === null || string === undefined) {
    result = 0;
  } else if (prediction) {
    result = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (prediction(string[i])) {
        result += 1;
      }
    }
  } else {
    result = string.length;
  }
  return result;
}
