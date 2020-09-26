// // //objects
// // //insert: O(1)
// // people["a0x3"] = { name: "Candice", age: 23 }
// // people["q113z"] = { name: "Jay", age: 16 }
// // people["kl1991"] = { name: "Drew", age: 31 }

// // //find: O(1)
// // const findPerson = function (personID) {
// //     return people[personID]
// // }

// // //update: O(1)
// // const updatePerson = function (personID, newName) {
// //     return people[personID].name = newName
// // }

// // //remove: O(1)
// // const removePerson = function (personID) {
// //     delete people[personID]
// // }

// // // array
// // //remove
// // const removePerson = function (personID) {
// //     for (let p in people) {
// //         if (people[i].id === personID) {
// //             return people.splice(i, 1)
// //         }
// //     }
// // }

// // //insert
// // let p1 = {
// //     id: "a0x3",
// //     name: "Candice",
// //     age: 23
// // }

// // let p2 = {
// //     id: "q113z",
// //     name: "Jay",
// //     age: 16
// // }

// // let p3 = {
// //     id: "kl991",
// //     name: "Drew",
// //     age: 31
// // }

// // people.push(p1)
// // people.push(p2)
// // people.push(p3)

// // //find
// // const findPerson = function (personID) {
// //     for (let p of people) {
// //         if (p.id === personID) {
// //             return p
// //         }
// //     }
// // }

// // //update
// // const updatePerson = function (personID, newName) {
// //     let person = findPerson(personID)
// //     person.name = newName
// // }

// // // As such, the following two are exactly the same:

// // let stuff = []
// // stuff.push("boat")

// // let stuff = new Array()
// // stuff.push("boat")


// // class SillyArray {
// //     constructor() {
// //         this.sillyStuff = []
// //         this.sillyLength = 0
// //     }

// //     print() {
// //         console.log(this.sillyStuff)
// //     }

// //     push(stuff) {
// //         this.sillyStuff[this.sillyLength] = stuff
// //         this.sillyLength++

// //         this.sillyStuff[this.sillyLength] = stuff
// //         this.sillyLength++
// //     }

// //     annihilate() {
// //         this.sillyStuff = []
// //     }
// // }

// // let myStuff = new SillyArray()
// // myStuff.push("Roger")
// // console.log(myStuff.sillyLength) //prints 2
// // myStuff.print() //prints ["Roger", "Roger"]
// // myStuff.push("Rabbit")
// // console.log(myStuff.sillyLength) //prints 4
// // myStuff.print() //prints [ 'Roger', 'Roger', 'Rabbit', 'Rabbit' ]
// // myStuff.annihilate()
// // myStuff.print() // prints []


// class UniqueArray{
//     constructor(){
//         this.uniqueItems = []
//         this.length = 0
//         this.obj = {}

//     }

//     // add(item){
//     //     for(let u of this.uniqueItems){
//     //         if(u===item){
//     //             console.log("already on the list")
//     //         }
//     //         else{
//     //             this.uniqueItems[this.length] = uniqeItem
//     //             this.obj[uniqeItem]=1
//     //             this.length++
//     //         }
//     //     }
//     // }

//     add(item) {
//         if(!this.exists(item)) {
//             this.arr[this.length] = item
//             this.length++
//             this.obj[item] = 1
//         }
// }

//     showAll(){
//         console.log(this.uniqueItems)
//     }

//     exists(item){
//         if(this.obj[item]){
//             return true
//         }
//         else{
//             return false
//         }
//     }

//     get(index) {
//         if(index <= (this.length - 1)){
//             return this.arr[index]
//         } else {
//             return -1
//         }
//     }
//     // get(index){
//     //     for(let i in this.uniqueItems){
//     //         if(!index){
//     //             return -1
//     //         }
//     //         else{
//     //             return this.uniqueItems[i]
//     //         }
//     //     }
//     // }
// }

class Queue {
    constructor() {
        this.queue = []
        this.length = 0
    }

    print(){
        console.log(this.queue)
    }
    enqueue(x) {
        this.queue.push(x)
        this.length++
    }

    dequeue() {
        this.queue.shift()
        this.length--
    }
    peek() {
        if(this.length===0){
            return null
        }
        return this.queue[0]
    }

    isEmpty() {
        if(this.length===0){
            return true
        } 
        else{
            return false
        }
    }
}


let queue = new Queue()
queue.enqueue(4)
queue.enqueue(1)
queue.enqueue(3)

const clearQueue = function(q){
    return q.peek() ? clearQueue(q.dequeue()) : "Done"
}

clearQueue(queue)
