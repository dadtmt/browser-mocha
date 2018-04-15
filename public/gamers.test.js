import makeGamsersList from './gamers.js'

const someGamers = [
    {
        firstName: 'Thomas',
        game: 'XCOM'
    },
    {
        firstName: 'Clément',
        game: 'GTA'
    }
]


describe('makeGamersList', () => {
    it('should return a string', () => {
        chai.assert.typeOf(makeGamsersList(someGamers), 'string')
    })
})
