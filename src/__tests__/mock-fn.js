const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
    const originalGetWinner = utils.getWinner

    utils.getWinner = jest.fn((p1, p2) => p1)
    // console.log(utils.getWinner)
    const winner = thumbWar('Cliff', 'Not Cliff')
    expect(winner).toBe('Cliff')

    expect(utils.getWinner.mock.calls).toEqual([
        ['Cliff', 'Not Cliff'],
        ['Cliff', 'Not Cliff']
    ])
    //cleanup
    utils.getWinner = originalGetWinner
})