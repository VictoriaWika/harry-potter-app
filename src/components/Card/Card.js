import './Card.css'
import createElement from '../../lib/createElement'
import getColorByHouse from '../../services/getColorByHouse'

export default function Card(character) {
  const profilePicture = createElement('img', {
    className: 'Card__image',
    src: character.image,
    height: '200',
  })
  const card = createElement(
    'section',
    {
      className: 'Card',
      innerHTML: `
      <h2>${character.name}</h2> 
      <p>${character.house.toUpperCase()}</p>
      `,
    },
    profilePicture
  )
  card.style.backgroundColor = getColorByHouse(character.house)

  return card
}
