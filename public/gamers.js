export const makeGamer = gamer => `<li>${gamer.firstName} plays ${gamer.game}</li>`

const makeGamersList = gamers => {
  const lis = ''

  for (let gamer of gamers) {
    console.log('gamer: ', gamer)
  }

  return `<ul>
      ${lis}
    </ul>`
  }

export default makeGamersList
