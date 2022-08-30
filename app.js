// TODO: Enable strict mode
"use strict";
// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  try {
    const resultData = JSON.parse(data);
    return resultData;
  } catch (error) {
    console.error(error);
    return null;
  }
  // TODO: if an exception is raised
  // print the error to the console
  // and return null
}

let failData = "<h1>Hello World!</h1>";

//The JSON.stringify() method converts a JavaScript value to a JSON string,
let passData = JSON.stringify({ success: true });
console.log(passData);
console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
