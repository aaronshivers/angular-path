const conCat = (str1, str2) => {
  if (str1[str1.length -1] === str2[0]) {
    str2 = str2.slice(1)
  }
  return str1 + str2
}

console.log(conCat("abc", "cat")) // "abcat"
console.log(conCat("dog", "cat")) // "dogcat"
console.log(conCat("abc", "")) // "abc"