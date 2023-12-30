const number = [2, 3, 4, 5]

number.map((n) => {
   console.log("Number is " + n)
})

console.log(number.reduce(function (acc, curr) { return acc + curr},0))


console.log(number.reduce((acc, element) => acc + element, 0))
