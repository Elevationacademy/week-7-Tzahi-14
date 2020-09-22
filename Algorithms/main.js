// let numbers = [31, 9, 18, 2, 106, 382, 0, 71, 8239, 791, -2321, 2500, 12, 13]
// let numbers = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412

// // let numbers = [-312, -9123, -112, -812, -7411, -312] //should find -9123

// // let numbers = [23, 23, 23, 23, 23] //should find 23


// const small = function(arr){

//     let smallestNumber = numbers[0]  //our 'number stored in memory'
//     for(let num of arr){ //going over each number

//       if(num < smallestNumber){

//         smallestNumber = num //forget the number stored in memory and store num instead
//       }
//     }

//     console.log("Smallest number is " + smallestNumber)
// }

// small(numbers)

// let smallestNumber //our 'number stored in memory'

// for(let num of numbers){ //going over each number

//   if(num < smallestNumber){

//     smallestNumber = num //forget the number stored in memory and store num instead
//   }
// }

// console.log("Smallest number is " + smallestNumber)

//EX1
// const printStars = function (num){
//     if(num>0){
//         let stars = ""
//         for(let i=0; i<num;i++){
//             stars +="*"
//             console.log(stars)
//         }
//     }
//     else{
//         console.log(`${num} should be higher then 0`)
//     }
// }
// printStars(5)

//EX2
// const printBackwardsStars = function(num){
//     if(num>0){

//         for(let i=num; i>0;i--){
//             console.log("*".repeat(i))
//         }
//     }
//     else{
//         console.log(`${num} should be higher then 0`)
//     }
// }

// printBackwardsStars(6)

// const printBackwardsStars = function (num) {
//     let string = ''
//     while (num > 0) {
//         if (string.length < num) {
//             string += '*'
//         } else if (string.length === num) {
//             console.log(string)
//             num--
//             string = ''
//         }
//     }
// }

// printBackwardsStars(3)

//EX3

// const printStarSeries = function (num, count) {

//     let star = ""
//     for (let j = 0; j < count; j++) {
//         for (let i = 1; i <= num; i++) {
//             star += "*"
//             console.log(star)
//         }
//         for (let i = num; i > 0; i--) {
//             console.log("*".repeat(i - 1))
//             star = ""
//         }
//     }
// }

// printStarSeries(5, 3)

//EX4

// const reverse = function (str) {
//     let newWord =""
//     for (let i in str){
//        newWord += str[i]=str[str.length-1-i]
//     }
//     console.log(newWord)
// }

// reverse("dog") //should return "god"
// reverse("race car") //should return "rac ecar"

//EX5

// const isPalindrom = function(str){
//     let backwards = ""
//     for (let i in str){
//         backwards +=str[i]=str[str.length-1-i]
//     }
//     if (backwards===str){
//         return true
//     }
//     else{
//         return false
//     }
    
// }

// console.log(isPalindrom("gag"))

//EX6
// const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// const alpa = {
//     0:"a",
//     1:"b",
//     2:"c",
//     3:"d",
//     4:"e",
//     5:"f",
//     6: "g",
//     7:"h",
//     8:"i",
//     9:"j",
//     10:"k",
//     11:"l",
//     12:"m",
//     13:"n",
//     14:"o",
//     15:"p",
//     16:"q",
//     17:"r",
//     18:"s",
//     19:"t",
//     20:"u",
//     21:"v",
//     22:"w",
//     23:"x",
//     24:"y",
//     25:"z"
// }

// const encrypt = function(word){
//     // let word = []
//     let newWord = ""
//     for(let i in alpa){
//     // let newWord = 1
//         // newWord +=[i]
//         let num = parseInt(i)
//         num +=num+1
//         newWord += word[num+1]
//     //  console.log(num+1)
//     //  console.log(typeof num)
//     //  console.log((alph[i]))

//     }
//         console.log(newWord)
// }

// encrypt("cat")

//EX8

// const colors = ["red", "indigo", "white", "teal", "yellow"];
// const foods = ["bread", "cheese", "cucumber"];


// const jumble = function (arr1, arr2) {
//     let jumbledArr = []//work with arr1 and arr2
//     let jumbledArr2 = []
//     jumbledArr.push(...colors)
//     jumbledArr.push(...foods)
//     let random = Math.floor(Math.random() * jumbledArr.length)
//     for(let i=random; i<jumbledArr.length;i){
//         jumbledArr2.push(jumbledArr[i])
//         jumbledArr.splice(jumbledArr[i],1)
//     }
//         console.log(jumbledArr2)
//     // return jumbledArr
// }

// jumble(colors, foods) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

//EX9

const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}

const getLetter = function(){
    const lottery = Math.floor(Math.random() *100)
    if(lottery<= 60){
        console.log("A won")
        console.log(lottery)
    }
    else if (lottery>=61 && lottery <= 70){
        console.log("B won")
        console.log(lottery)
    }
    else if (lottery>= 71 && lottery <= 80){
        console.log("C won")
        console.log(lottery)
    }
    else{
        console.log("D won")
        console.log(lottery)
    }
}

getLetter()