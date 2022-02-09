const thumbWar = require('../thumb-war')
const utils = require('../utils')

jest.mock('../utils', () => {
    return {
        getWinner: jest.fn((p1, p2) => p1)
    }
})

test('returns winner', ()=> {
    const winner = thumbWar('Cliff', 'Suffering')
    expect(winner).toEqual('Cliff')
    expect(utils.getWinner.mock.calls).toEqual([
        ['Cliff', 'Suffering'],
        ['Cliff', 'Suffering'],
    ])

    //cleanup
    utils.getWinner.mockReset()
})

