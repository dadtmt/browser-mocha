import { cleanHtml } from './utils.js'

const htmlString = `
  <ul>
    <li>Thomas plays XCOM</li>
    <li>Clément plays GTA</li>
  </ul>
`

const expected = '<ul><li>Thomas plays XCOM</li><li>Clément plays GTA</li></ul>'

describe('cleanHtml', () => {
  it('should return a string', () => {
    chai.assert.typeOf(cleanHtml(htmlString), 'string')
  })
  it('should remove \n and spaces between tags', () => {
    chai.assert.equal(cleanHtml(htmlString), expected)
  })
})
