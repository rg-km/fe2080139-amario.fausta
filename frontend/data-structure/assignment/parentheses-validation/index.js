const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    if (s.length % 2 == 1 || s.length == 0) {
      return false;
    }
    const stack = new Stack();
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        stack.push(s[i]);
      } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
        if (
          (s[i] === ")" && stack.peek() == "(") ||
          (s[i] === "]" && stack.peek() == "[") ||
          (s[i] === "}" && stack.peek() == "{")
        ) {
          stack.pop();
        }
      }
    }
    return stack.data.length === 0;
}

module.exports = {
    IsValidParentheses
}