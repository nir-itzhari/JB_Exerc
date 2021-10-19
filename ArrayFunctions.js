const arrayOfSquare = [
    {
        width: 200,
        height: 200
    },
    {
        width: 100,
        height: 100
    }
]

// EXERC_1

const squareSize = arrayOfSquare.map(function (obj) {
    obj.size = obj.width * obj.height
    return obj
})
console.log(squareSize)

// EXERC_2

const squareSizeArray = squareSize.map(function (obj) {
    return obj.size
})
console.log(squareSizeArray)

// EXERC_3

const arrNumbers = [1, 2, 3, 4, 5, 6]
function highNumber(num) {
    const higerNumbers = arrNumbers.filter(function (num1) {
        return num1 > num
    })
    return higerNumbers
}
console.log(highNumber(3))

// EXERC_4

function highSquare(num) {
    const higerSquare = squareSize.filter(function (obj) {
        return obj.size > num
    })
    return higerSquare
}
console.log(highSquare(20000))

// EXERC_5
function findSquareSize(arrSquare, size) {
    const squareFind = arrSquare.find(function (obj) {
        if (obj.size === size) {
            return obj
        }
    })
    return squareFind
}
console.log(findSquareSize(squareSize, 10000))

// EXERC_6
function SquareTrueFalse(arrSquare, size) {
    const squareByEvery = arrSquare.every(function (obj) {
        return obj.size === size
    })
    return squareByEvery
}
console.log(SquareTrueFalse(squareSize, 10000))

// EXERC_7
function SortBySize(arrSquare) {
    const sortBySize = arrSquare.sort(function (obj1, obj2) {
        return obj1.size - obj2.size
    })
    return sortBySize
}
console.log(SortBySize(squareSize))


// EXERC_8
function getNumberIndex(arrayOfNumbers, num) {
    let index, countIndex = -1;
    const indexOfNumbers = []
    while ((index = arrayOfNumbers.indexOf(num)) !== -1){
        arrayOfNumbers = arrayOfNumbers.slice(index+1, arrayOfNumbers.length - index + 1)
        countIndex += (index+1);
        indexOfNumbers.push(countIndex)
    }
    return indexOfNumbers
}
const numbers = [23, 45, 23, 56, 23, 89, 23, 10, 23]
console.log(getNumberIndex(numbers, 23))