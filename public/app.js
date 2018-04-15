const mainDiv = document.getElementById('main')

const render = html => {
  mainDiv.innerHTML = html
}

// example data
const wilders = [
  {
      firstName: 'Aurélie',
      game: 'Monkey Island'
  },
  {
      firstName: 'Max',
      game: 'Halo'
  },
  {
      firstName: 'Thibaud',
      game: 'Diablo 2'
  }
]

const makeGamersList = gamers => `<div>This is my list</div>`

render(makeGamersList(wilders))
