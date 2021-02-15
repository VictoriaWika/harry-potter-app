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

  const showFilters = createElement('button', {
    className: 'Button__ShowFilters',
    innerText: 'Show Filter Options',
  })

  showFilters.addEventListener('click', () => {
    buttonContainer.hidden = !buttonContainer.hidden
  })

  const buttonContainer = createElement(
    'section',
    {
      className: 'Button__container',
      hidden: true,
    },
    ...buttons
  )

  const filterContainer = createElement(
    'section',
    { className: 'Button__FilterContainer' },
    showFilters,
    buttonContainer
  )

  return createElement('section', { className: HouseFilter }, filterContainer)
}
