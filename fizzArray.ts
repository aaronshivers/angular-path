const fizzArray = n => {
  if (n === 0) return []

  const array = []

  for (let i = 0; i < n; i++) {
    array.push(String(i))
  }

  return array
}

fizzArray(4) // ["0", "1", "2", "3"]
fizzArray(10) // ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
fizzArray(2) // ["0", "1"]
fizzArray(0) // []