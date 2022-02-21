const thumbWar = require('../thumb-war')
const utils = require('../utils')

jest.mock('../utils')

test('returns winner', () => {
    const winner = thumbWar('Winner', "Loser")
    expect(winner).toBe('Winner')
    expect(utils.getWinner.mock.calls).toEqual([
        ['Winner', 'Loser'],
        ['Winner', 'Loser']
    ])

    //cleanup
    utils.getWinner.mockReset()
})

