function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1

    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}

console.log(generateMatrix(3, 4))

let matrix = generateMatrix(3, 4)

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        // console.log(matrix[i][j])
    }
}
// console.log(matrix[1][2]) //prints 7

const get = function (rowNum, colNum) {
    const number = matrix[rowNum][colNum]
    console.log(number)
}

get(1, 2)

const printMatrix = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let line = ""
        for (let j = 0; j < matrix[i].length; j++) {
            line += (matrix[i][j] + "\t")
        }
        console.log(line)

    }
}

printMatrix(matrix)

function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}

printColumn(matrix, 1) //prints 2, 6, 10 on separate lines

const printRow = function (matrix, rowNum) {
    for (let i = 0; i < matrix[rowNum].length; i++) {
        console.log(matrix[rowNum][i])
    }
}


printRow(matrix, 1)

// matrix[1][2] = 42
// print()
// //prints:
// 1       2       3       4
// 5       6       42      8
// 9       10      11      12


const alter = function (matrix, rowNum, colNum, numberToReplace) {
    for (let i = 0; i < matrix.length; i++) {
        let line = ""
        for (let j = 0; j < matrix[i].length; j++) {
            line += (matrix[i][j] + "\t")
        }
        matrix[rowNum][colNum] = numberToReplace
        console.log(line)
    }
}
alter(matrix, 1, 3, 174)