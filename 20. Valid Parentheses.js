/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false*/

var isValid = function (s) {

  const array = [];
  const strings = "() [] {}"
  let i = 0

  while (i < s.length) {

    array.push(s[i]);
    i++

    let open = array[array.length - 2]
    let closed = array[array.length - 1]

    let both = open + closed;

    if (strings.includes(both)) {
      array.pop();
      array.pop();

    }





  }
  return array.length === 0;


};

//return