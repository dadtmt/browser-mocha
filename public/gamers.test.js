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

const expectedHtml = `
  <ul>
    <li>Thomas plays XCOM</li>
    <li>Clément plays GTA</li>
  </ul>
`

describe('makeGamersList', () => {
  it('should return a string', () => {
      chai.assert.typeOf(makeGamsersList(someGamers), 'string')
  })
  it ('should return an html string of a gamers list', () => {
      chai.assert.equal(makeGamsersList(someGamers), expectedHtml)
  })
})
