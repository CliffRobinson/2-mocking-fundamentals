const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
    const originalGetWinner = utils.getWinner

    utils.getWinner = (p1, p2) => p1

    const winner = thumbWar('Cliff', 'Not Cliff')
    expect(winner).toBe('Cliff')

    //cleanup
    utils.getWinner = originalGetWinner
})