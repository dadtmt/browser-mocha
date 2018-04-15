import { cleanHtml } from './utils.js'
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

const expectedMakeGamersResult = cleanHtml(`
  <ul>
    <li>Thomas plays XCOM</li>
    <li>Clément plays GTA</li>
  </ul>
`)

describe('makeGamersList', () => {
  it('should return a string', () => {
    chai.assert.typeOf(makeGamsersList(someGamers), 'string')
  })
  it ('should return an html string of a gamers list', () => {
    const result = cleanHtml(makeGamsersList(someGamers))
    chai.assert.equal(result, expectedMakeGamersResult)
  })
})


const oneGamer = {
  firstName: 'Thomas',
  game: 'XCOM'
}

const expectedMakeGamerResult = cleanHtml(`<li>Thomas plays XCOM</li>`)

describe('makeGamer', () => {
  it('should return a string', () => {
    chai.assert.typeOf(makeGamer(oneGamer), 'string')
  })
  it ('should return an html string of a gamer li element', () => {
    const result = cleanHtml(makeGamer(oneGamer))
    chai.assert.equal(result, expectedMakeGamerResult)
  })
})
