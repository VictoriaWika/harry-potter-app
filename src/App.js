import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'

export default function App() {
  const header = AppHeader('Hogwarts')
  document.body.append(header)

  // fetch API
  getCharacters()
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
