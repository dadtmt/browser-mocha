export const makeGamer = gamer => `<li>${gamer.firstName} plays ${gamer.game}</li>`

const makeGamersList = gamers => {
  let lis = ''
  for (let gamer of gamers) {
    lis += makeGamer(gamer)
  }
  return `<ul>${lis}</ul>`
}

export default makeGamersList
