import { makeGamer } from './gamers.js'
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

const expectedMakeGamersResult = `
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
    chai.assert.equal(makeGamsersList(someGamers), expectedMakeGamersResult)
  })
})


const oneGamer = {
  firstName: 'Thomas',
  game: 'XCOM'
}

const expectedMakeGamerResult = `<li>Thomas plays XCOM</li>`

describe('makeGamer', () => {
  it('should return a string', () => {
    chai.assert.typeOf(makeGamer(oneGamer), 'string')
  })
})
