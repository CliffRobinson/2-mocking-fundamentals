const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', ()=> {
    jest.spyOn(utils, 'getWinner')
    utils.getWinner.mockImplementation((p1, p2) => p1)

    const winner = thumbWar('Cliff', 'Suffering')
    expect(winner).toEqual('Cliff')
    expect(utils.getWinner.mock.calls).toEqual([
        ['Cliff', 'Suffering'],
        ['Cliff', 'Suffering'],
    ])

    //cleanup
    utils.getWinner.mockRestore()
})

