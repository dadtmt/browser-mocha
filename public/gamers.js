export const makeGamer = gamer => `<li>${gamer.firstName} plays ${gamer.game}</li>`

const makeGamersList = gamers => `<ul>${gamers.reduce((acc, gamer) => acc + makeGamer(gamer), '')}</ul>`


export default makeGamersList
