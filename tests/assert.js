var assert = function(actual, expected) {
  if(actual !== expected) {
  throw new Error("Assertion failed: expected " + expected + " but come up with " + actual)
} else {
 console.log("test passing " + actual + " is equal to " + expected)
};
}

var describe = function(describe , fn) {
  console.log(describe);
  fn();
};

var it = function(message, fn) {
  describe(" " + message, fn);
}