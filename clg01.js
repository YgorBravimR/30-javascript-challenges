function average(numbers) {
  let sum = 0

  numbers.forEach(number => {
    sum += number
  })
  const average = sum / numbers.length
  return average
}

function averageReduce(...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num)
  return sum / numbers.length
}

console.log(average([10, 9, 6, 8, 9, 1, 5, 7]))
console.log(average([2, 5, 7, 1, -2]))
console.log(average([5, 5, 5, 5, 5, 5, 5]))

console.log(averageReduce(10, 9, 6, 8, 9, 1, 5, 7))
console.log(averageReduce(2, 5, 7, 1, -2))
console.log(averageReduce(5, 5, 5, 5, 5, 5, 5))
