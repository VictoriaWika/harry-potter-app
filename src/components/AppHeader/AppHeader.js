import './AppHeader.css'

export default function AppHeader(title) {
  const el = document.createElement('header')
  el.className = 'AppHeader'
  el.innerHTML = `
  <h1>
  <img class="flicker  vibrate" width="20" height="20" src="../assets/icons/lightning.svg" alt="">
  ${title}
  <img class="flicker vibrate" width="20" height="20" src="../assets/icons/lightning.svg" alt=""></h1>`
  return el
}
