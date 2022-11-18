var lengthOfLastWord = function (s) {

  let splitted = s.split(" ")
  console.log(splitted)




  for (let i = splitted.length - 1; i >= 0; i--) {
    if (splitted[i] !== "") {
      return splitted[i]
    }
  }

};

console.log(lengthOfLastWord("a"))