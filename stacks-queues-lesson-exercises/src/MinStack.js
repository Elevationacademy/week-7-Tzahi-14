/* Write your class below */

const Stack = require('./Stack')

class MinStack extends Stack {
  constructor() {
    super()
    this.stack = []
    this.length = 0
    this.min = new Stack()
  }

  push(x) {
    if (this.isEmpty()) {
      this.min.push(x)
    } else if (x < this.min.peek()) {
      this.min.push(x)
    }

    super.push(x)
  }

  pop() {
    if (this.isEmpty()) {
      return null
    } else if (this.peek() === this.min.peek()) {
      this.min.pop()
    }
//30,40

//30

 return super.pop()
  }

  getMin() {
    return this.min.peek()
  }
}




//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19




/* Do not remove the exports below */
module.exports = MinStack