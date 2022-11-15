/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/


var longestCommonPrefix = function (strs) {


  let x = strs.length
  let result = ""
  let smaller = strs[0]


  for (let i = 0; i < x; i++) {
    if (strs[i].length < smaller.length) {
      smaller = strs[i]
      result = smaller
    }
  }

  // const index = strs.indexOf(smaller)
  // strs.splice(index, 1)




  // for (let i = 0; i < strs.length; i++) {

  //   for (let j = 0; j < smaller.length; j++) {
  //     if (strs[i][j] === smaller[j] && strs[i][j] !== result[j]) {
  //       result += smaller[j]
  //     } else {
  //       result = result.slice(0, j + 1)
  //       console.log(result)
  //     }
  //   }
  // }

  return result

}



console.log(longestCommonPrefix(["a", "ba"]))






















