export const makeGamer = gamer => `<li>${gamer.firstName} plays ${gamer.game}</li>`

const makeGamersList = gamers => `
  <ul>
    <li>Thomas plays XCOM</li>
    <li>Clément plays GTA</li>
  </ul>
`

export default makeGamersList
