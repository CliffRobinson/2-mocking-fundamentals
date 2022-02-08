const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function fn(impl) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args)
        return impl(...args)
    }
    mockFn.mock = {calls:[]}
    return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p2)

const winner = thumbWar('Injustice', 'Cliff')

assert.strictEqual(winner, 'Cliff')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Injustice', 'Cliff'],
    ['Injustice', 'Cliff']
])

//cleanup
utils.getWinner = originalGetWinner