import './Button.css'
import createElement from '../../lib/createElement'

export default function Button(text, onClick) {
  const el = createElement('button', { className: 'Button' }, text)

  el.addEventListener('click', onClick)

  function toggle(force) {
    el.classList.toggle('selected', force)
  }

  function updateText(text) {
    el.innerText = text
  }

  return {
    el,
    updateText,
    toggle,
    text: el.innerText,
  }
}
