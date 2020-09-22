// const average = function (array,number){
//     let sum = 0
//     let counter = 0
//     for (let arr of array){
//         if (arr%number===0){
//             sum +=arr
//             counter++
//         }
//     }
//     return sum/counter
// }

// let v = [88,44,32,30,31,19,74]
// console.log(average(v,2))
// console.log(average(v,11))
const unique = function (array){
    let newArr = []
    for(let i =0; i<array.length ; i++){
        if(array[i+1]!==array[i] &&array[i-1]!==array[i]){
            newArr.push(array[i])
        }
    }
    return newArr
}


let w = [1,2,2,3,4,5,5,5,5,6,7,7,7,8]
let a = [2,2,2,4,4,5,5,5,5,6,6,7,7,7]
let u = unique(w)
let b = unique(a)
console.log(unique(u))
console.log(unique(b))
