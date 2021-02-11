import './HouseFilter.css'
import Button from '../Button'
import createElement from '../../lib/createElement'

export default function HouseFilter(onFilterByHouse) {
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

  let currentFilter

  const buttons = houses.map(house => {
    const button = Button(house, () => {
      currentFilter = currentFilter === house ? null : house
      onFilterByHouse(currentFilter)
      buttons.forEach(button => button.toggle(button.text === currentFilter))
    })

    return button
  })
  return createElement('section', { className: HouseFilter }, ...buttons)
}
