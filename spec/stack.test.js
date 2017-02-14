/* eslint-env mocha */

import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()
      const otherStack = new Stack('one')
      const thirdStack = new Stack([{item11: 'item1'}, {item22: 'item2'}])
      const quarterStack = new Stack({key1: 'value1'})

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
      expect(myStack.items).to.eql(['foo'])

      expect(() => otherStack.push(['bar', 'baz']))
        .to.alter(() => otherStack.length(), { from: 1, to: 3 })
      expect(otherStack.items).to.eql(['bar', 'baz', 'one'])

      expect(() => thirdStack.push('hello'))
        .to.alter(() => thirdStack.length(), { from: 2, to: 3 })
      expect(thirdStack.items).to.eql([
        'hello',
        {item11: 'item1'},
        {item22: 'item2'}
      ])

      expect(() => quarterStack.push(['world']))
        .to.alter(() => quarterStack.length(), { from: 1, to: 2 })
      expect(quarterStack.items).to.eql(['world', {key1: 'value1'}])
    })
  })

  context('pop()', () => {
    it('returns and removes the top element of the stack or null if the stack is empty', () => {
      const myStack = new Stack(['item1', 'item2'])
      const otherStack = new Stack()

      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 2, to: 1 })

      expect(myStack.pop()).to.eql('item2')

      expect(otherStack.peek()).to.be.null
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack or null if the stack is empty', () => {
      const myStack = new Stack('hello world!')
      const otherStack = new Stack()

      expect(myStack.peek()).to.eql('hello world!')
      expect(otherStack.peek()).to.be.null
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty or false if not', () => {
      const myStack = new Stack('hello world!')
      const emptyStack = new Stack()

      expect(myStack.isEmpty()).to.eql(false)
      expect(emptyStack.isEmpty()).to.eql(true)
    })
  })

  context('length()', () => {
    it('returns the number on items in the stack', () => {
      const myStack = new Stack('hello world!')
      const emptyStack = new Stack()

      expect(myStack.length()).to.eql(1)
      expect(emptyStack.length()).to.eql(0)
    })
  })
})
