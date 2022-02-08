const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function fn(impl) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args)
        return impl(...args)
    }
    mockFn.mock = {
        calls:[]
    }
    return mockFn
}
console.log('anything at all')
const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p1)

const winner = thumbWar('Cliff', 'Oppression')
assert.strictEqual(winner, 'Cliff')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Cliff', 'Oppression'],
    ['Cliff', 'Oppression'],
])

//cleanup
utils.getWinner = originalGetWinner