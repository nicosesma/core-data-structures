'use strict'

export default class Stack {
  constructor(instantiator) {
    if (!(typeof instantiator === 'undefined')) {
      if (!Array.isArray(instantiator)) {
        this.items = [instantiator]
        this.size = 1
      }
      if (Array.isArray(instantiator)) {
        this.items = instantiator
        this.size = instantiator.length
      }
    } else {
      this.items = []
      this.size = 0
    }
  }


  push(item) {
    if (Array.isArray(item)) {
      this.size = this.size + item.length
    }
    if (!(Array.isArray(item))) {
      item = [item]
      this.size ++
    }

    this.items = [...item, ...this.items]
    return this.items
  }


  pop() {
    if (this.length === 0) {
      return null
    }

    this.size --
    return this.items.splice(0, 1)[0]
  }


  peek() {
    return this.size
      ? this.items[0]
      : null
  }


  isEmpty() {
    return this.size === 0
  }


  length() {
    return this.size
  }
}
