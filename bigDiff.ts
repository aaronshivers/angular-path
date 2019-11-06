const bigDiff = array => {
  const min = Math.min(...array)
  const max = Math.max(...array)


  console.log(max - min)
}

bigDiff([10, 3, 5, 6]) // 7
bigDiff([7, 2, 10, 9]) // 8
bigDiff([2, 10, 7, 2]) // 8