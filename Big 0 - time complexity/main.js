// // const bagpack = {
// //     food: {
// //         apple: 2,
// //         bread: 1,
// //         cheese: 3
// //     },
// //     officeSupplies: {
// //         pencil: 5,
// //         ruler: 1
// //     },
// //     gadgets: {
// //         phone: 1,
// //         laptop: 1
// //     }
// // }

// // const getFromBag = function (category, item) {
// //     if (bagpack[category]) {
// //         let foundItem = bagpack[category][item]
// //         return foundItem ? foundItem : { err: "Item not found" }
// //     }

// //     return { err: "Category not found" }
// // }


// // console.log(getFromBag("food","apple"))

// const books = {
//     A: [{ title: "Alchemist", author: "Pablo" }, { title: "Asmiov's Tales", author: "Issac Asimov" }, { title: "Analysis of Apes", author: "Jane Goodall" }],
//     B: [{ title: "Best of Meryl Streep Scripts", author: "Madamme Streep" }, { title: "Boyhood, a Story", author: "Childish Gambino" }],
//     //...,
//     N: [{ title: "Name of the Wind", author: "Patrick Rothfuss" }, { title: "Nostradamus: Revelations", author: "Dalinar Kholin" }],
//     //etc
// }

// const findBook = function (bookName) {
//     let letter = bookName[0]
//     console.log(letter)
//     let booksStartingWithLetter = books[letter]
//     for (let book of booksStartingWithLetter) {
//         if (book.title == bookName) {
//             return book
//         }
//     }
// }

// console.log(findBook("Name of the Wind"))
// /////////

// const findDuplicates = function (ages) {
//     for (let i = 0; i < ages.length; i++) {

//         for (let j = i + 1; j < ages.length; j++) {
//             if (ages[i] === ages[j]) {
//                 console.log(`${ages[i]} has a duplicate`)
//             }
//         }
//         //note that this *entire* inner loop runs for each iteration of i
//     }
// }
// //////// O(mn)
// let professors = ["Jordana", "Daliah", "Seamus"]

// const greetProfessors = function (kids) {
//     for (let kid of kids) {

//         for (let p of professors) {
//             console.log(`${kid} greets Professor ${p}`)
//         }
//     }
// }

// /////
// const employers = [{ name: "Microsoft", positions: 3 }, { name: "Tesla", positions: 0 }, { name: "Apple", positions: 14 }]
// const removeYouth = (people) => people.filter(p => p.age < 18)
// const employ = (person, employer) => {
//     person.hasJob = true
//     employer.positions -= 1
// }

// const determineEmployment = function (people) {
//     removeYouth(people)
//         .forEach(p => {
//             employers.forEach(e => {
//                 console.log(`${p.name} applied for a job at ${e.name}`)
//                 (e.positions > 0 && !p.hasJob) ? employ(p, e) : null
//             })
//         })
// }

// let numbers = [24,33,66,102,108,140,146,177,182,217,341,357,372,390,418,427,442,444,469,480,572,624,627,665,680,694,743,768,790,794,852,896,919,942,982,991,1026,1055,1086,1137,1141,1157,1167,1271,1272,1273,1301,1337,1340,1344,1388,1455,1465,1466,1509,1555,1640,1667,1667,1689,1824,1897,1928,1950,1987,2056,2059,2070,2123,2140,2198,2215,2260,2304,2383,2403,2433,2454,2472,2480,2481,2535,2543,2554,2557,2580,2630,2634,2671,2745,2792,2839,2849,2871,2873,2893,2932,2962,2984,2987]


// //ex1 - O(n)
// const getBalance = function (bankOperations) {
//     let balance = 0
//     for (let op of bankOperations) {
//         balance += op
//     }
//     return balance
// }

// getBalance([-27, -43, -2400, -700, 15000, 58])

// //ex - O(log(n))//every time we will duplicate by 2 since i = i*2 and this is O(log(n))
// const printSome = function (complaints) {
//     for (let i = 1; i < complaints.length; i = i * 2)
//         console.log(complaints[i].text);
// }

// //ex3 - O(1)??
// const allSides = [
//     { a: 3, b: 4 },
//     { a: 15, b: 21 },
//     { a: 41, b: 8 },
//     { a: 12, b: 6 }
// ]

// const relevantSides = allSides.filter(s => s.a % 3 == 0)
// for (let sides of relevantSides) {
//     console.log(getHype(sides))
// }

// const getHype = function (sides) {
//     let a = sides.a
//     let b = sides.b
//     let sumOfSquares = a * a + b * b
//     return Math.sqrt(sumOfSquares)
// }

// //ex4- O(nm)

// const studentAnswers = {
//     brBlds: {
//         1: "a",
//         2: "a",
//         3: "c"
//     },
//     dvOna: {
//         1: "a",
//         2: "c",
//         3: "c"
//     },
//     nmPrz: {
//         1: "a",
//         2: "b",
//         3: "a"
//     }
// }
// const studentGithubs = ["brBlds", "dvOna", "nmPrz"]

// const distributions = {
//     1: {},
//     2: {},
//     3: {}
// }

// const getDistributions = function (studentAnswers) {
//     studentGithubs.forEach(sg => {
//         let answers = studentAnswers[sg]

//         Object.keys(answers).forEach(questionNumber => {
//             let letterAnswer = answers[questionNumber]

//             distributions[questionNumber][letterAnswer] ?
//                 distributions[questionNumber][letterAnswer]++ :
//                 distributions[questionNumber][letterAnswer] = 1
//         })
//     })

//     return distributions
// }

// getDistributions(studentAnswers)

// //ex5 -O(n)
const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))

const emailManager = function () {
    let email = generateEmail()//O(1)

    $.get('/recepients', function (recepients) {
        sendEmails(email, recepients)
    })
}

// EX6

// // const findDuplicates = function (ages) {
// //     for (let i = 0; i < ages.length; i++) {

// //         for (let j = i + 1; j < ages.length; j++) {
// //             if (ages[i] === ages[j]) {
// //                 console.log(`${ages[i]} has a duplicate`)
// //             }
// //         }
// //         //note that this *entire* inner loop runs for each iteration of i
// //     }
// // }


// const findDuplicates = function (arr) {	
//     let obj = {}

//     for (let i = 0; i < arr.length; i++) {
//         if(obj[arr[i]]) {
//             obj[arr[i]]++
//         } else {
//             obj[arr[i]] = 1
//         }
//     }

//     Object.keys(obj).forEach(k => {
//         if(obj[k] > 1) {
//             console.log(`number ${k} has a duplicate`)
//         }
//     })
// }

// findDuplicates([1, 3, 1, 2, 1, 3])

//EX7
// let data = {
//     ax01: { name: "Ray", age: 28, salary: 1300 },
//     qs84: { name: "Lucius", age: 31, salary: 840 },
//     bg33: { name: "Taylor", age: 18, salary: 2700 },
// }

// const findEmployeeSalary = function (employeeID) {
//     console.log((data[employeeID].salary))

// }
// findEmployeeSalary("ax01")

//EX8
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

//  const findIndex = function(numbers, num){
//     let newArr = []
//     const goToMiddle = numbers.length/2
//     console.log(goToMiddle)
//     console.log(numbers[goToMiddle])
//     while(numbers[goToMiddle]>num){

//     }

//  }

//  findIndex(numbers)

const findIndex = function (numbers, num) {
    let startIndex = 0
    let endIndex = numbers.length - 1
    let middleIndex, index
    let found = false
    while (!found) {
        middleIndex = Math.floor((endIndex - startIndex) / 2)
        index = middleIndex + startIndex
        if (num === numbers[index]) {
            found = true
        } else if (numbers[index] > num) {
            endIndex = middleIndex - 1
        } else if (numbers[index] < num) {
            startIndex = middleIndex + startIndex
        }
    }
    return index
}

findIndex(numbers, "33")