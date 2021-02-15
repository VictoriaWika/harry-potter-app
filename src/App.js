import createElement from './lib/createElement'
import getCharacters from './services/getCharacters'
import AppHeader from './components/AppHeader'
import Card from './components/Card'
import HouseFilter from './components/HouseFilter'
import Navigation from './components/Navigation'

export default function App() {
  const header = AppHeader('Hogwarts')
  const houseFilter = HouseFilter(onFilterByHouse)
  const cardContainer = createElement('div')
  const navigation = Navigation(onNavigate)

  const app = createElement(
    'div',
    { className: 'App' },
    header,
    houseFilter,
    cardContainer,
    navigation
  )
  let characters

  // fetch API
  getCharacters()
    .then(data => {
      createCards(data)
      characters = data
    })
    .catch(error => handleGetCharacterError(error))

  function onFilterByHouse(house) {
    const filteredCharacters = characters.filter(
      character => house == null || character.house === house
    )
    createCards(filteredCharacters)
  }

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    app.append(errorMessage)
  }

  function onNavigate(text) {
    if (text === 'Home') {
      console.log('Home')
    }
    if (text === 'Wizards') {
      console.log('Wizards')
    }
    if (text === 'Sorting Hat') {
      console.log('Sorting Hat')
    }
    if (text === 'Quidditsch') {
      console.log('Quidditsch')
    }
  }
  return app
}
