import createElement from '../../lib/createElement'
import './Navigation.css'

const buttonsConfig = [
  { text: 'Home', svgPath: '../../assets/icons/lightning.svg' },
  { text: 'Wizards', svgPath: '../../assets/icons/wizards.svg' },
  { text: 'Sorting Hat', svgPath: '../../assets/icons/hat.svg' },
  { text: 'Quidditsch', svgPath: '../../assets/icons/quidditsch.svg' },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: text })
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
