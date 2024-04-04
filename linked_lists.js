class LinkedList {
  constructor (head, tail) {
    this.head = head
    this.tail = tail
  }

  append (value) {
    const newNode = new Node(value)
    if (this.head != null) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
  }

  prepend (value) {
    const newNode = new Node(value)
    if (this.head != null) {
      newNode.next = this.head
      this.head = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
  }

  size () {
    if (this.head == null) {
      return 0
    } else {
      let i = 1
      let currentNode = this.head
      while (currentNode.next != null) {
        i++
        currentNode = currentNode.next
      }
      return i
    }
  }

  getHead () {
    return this.head
  }

  getTail () {
    return this.tail
  }

  at (index) {
    let currentNode = this.head
    if (index >= this.size()) {
      return null
    } else {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next
      }
    }

    return currentNode
  }

  pop () {
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }
    if (currentNode.next === this.tail) {
      this.tail = currentNode
      currentNode.next = null
    }
  }

  contains (value) {
    let currentNode = this.head
    console.log(currentNode.next)
    while (currentNode.next != null || currentNode === this.tail) {
      if (currentNode.data === value) {
        return true
      } else {
        currentNode = currentNode.next
      }
    }
    return false
  }

  find (value) {
    let currentNode = this.head
    let index = -1
    while (currentNode.next != null || currentNode === this.tail) {
      index++
      if (currentNode.data === value) {
        return index
      } else {
        currentNode = currentNode.next
      }
    }
    return null
  }

  toString () {
    let currentNode = this.head
    let linkedListString = ''
    while (currentNode !== this.tail) {
      linkedListString = linkedListString + `( ${currentNode.data} ) -> `
      currentNode = currentNode.next
    }
    if (currentNode === this.tail) {
      linkedListString = linkedListString + `( ${currentNode.data} ) -> null`
    }
    // console.log(linkedListString)
    return linkedListString
  }

  insertAt (value, index) {
    const newNode = new Node(value)
    if (this.at(index) != null) {
      if (index === 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        const insertAfterThisNode = this.at(index - 1)
        const insertBeforeThisNode = this.at(index)
        insertAfterThisNode.next = newNode
        newNode.next = insertBeforeThisNode
      }
    } else if (index === this.size()) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      console.log('Error: Empty Node not linked')
    }
  }
}

class Node {
  constructor (data = null, next = null) {
    this.data = data
    this.next = next
  }
}

const newLinkedList = new LinkedList()
newLinkedList.append(5)
newLinkedList.append(10)
newLinkedList.prepend(15)
newLinkedList.append(20)
console.log(newLinkedList.toString())
newLinkedList.pop()
console.log(newLinkedList.toString())
console.log(newLinkedList)
console.log(newLinkedList.getHead())
console.log(newLinkedList.getTail())
console.log(`Linked List Size: ${newLinkedList.size()}`)
console.log(newLinkedList.at(6))
console.log(newLinkedList.contains(10))
console.log(newLinkedList.find(15))
console.log(newLinkedList.toString())
newLinkedList.insertAt(60, 4)
console.log(newLinkedList.toString())
