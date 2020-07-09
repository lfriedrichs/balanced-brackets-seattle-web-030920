function isBalanced(input){

let parentheses = "[]{}()"
let stack = []

for(let parenthesis of input) {
let parenthesisIndex = parentheses.indexOf(parenthesis);


if(parenthesisIndex % 2 === 0) {
  stack.push(parenthesisIndex + 1); // push next expected brace position
} else {
  if(stack.pop() !== parenthesisIndex) {
    return false;
  }
}
}

return stack.length === 0;
}