const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function fn(impl = () => {}) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args)
        return impl(...args)
    }
    mockFn.mock = {calls:[]}

    mockFn.mockImplementation = newImpl => (impl = newImpl)
    //why does doing only this change the function output after it has been returned?
    //I guess because it re-checks impl in this scope every time it runs?
    //weird. 
    return mockFn
}

function spyOn(obj, prop) {
    const originalValue = obj[prop]
    obj[prop] = fn()

    obj[prop].mockRestore = () => (obj[prop] = originalValue)
}

spyOn(utils, 'getWinner')
utils.getWinner.mockImplementation((p1, p2) => p2)

const winner = thumbWar('Injustice', 'Cliff')

assert.strictEqual(winner, 'Cliff')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Injustice', 'Cliff'],
    ['Injustice', 'Cliff']
])

//cleanup
utils.getWinner.mockRestore()