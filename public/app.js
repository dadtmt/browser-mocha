import makeGamersList from './gamers.js';

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

render(makeGamersList(wilders))
