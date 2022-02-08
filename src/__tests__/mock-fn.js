const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
    jest.spyOn(utils, 'getWinner')
    utils.getWinner.mockImplementation((p1, p2) => p1)

    const winner = thumbWar('Cliff', 'Not Cliff')
    expect(winner).toBe('Cliff')

    expect(utils.getWinner.mock.calls).toEqual([
        ['Cliff', 'Not Cliff'],
        ['Cliff', 'Not Cliff']
    ])
    //cleanup
    utils.getWinner.mockRestore()
})