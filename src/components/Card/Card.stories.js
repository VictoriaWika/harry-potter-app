import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const defaultCard = () =>
  Card({
    name: 'Harry Potter',
    house: 'Gryffindor',
    image: 'character.image',
  })
