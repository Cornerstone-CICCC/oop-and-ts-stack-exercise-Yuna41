// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  let tempStack = new Stack()

  while(!stack.isEmpty()){
    let num = stack.pop()
    if(!tempStack.items.includes(num)){
      tempStack.push(num)
    }
  }
  while(!tempStack.isEmpty()){
    stack.push(tempStack.pop())
  }
}

// 5, 2, 1, 5, 1, 3

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [2, 5, 1, 3]
