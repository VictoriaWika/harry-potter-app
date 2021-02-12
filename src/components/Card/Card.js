import './Card.css'
import createElement from '../../lib/createElement'
// import getColorByHouse from '../../services/getColorByHouse'

import GwaveSVG from '../../assets/icons/Gwave.svg'
import HwaveSVG from '../../assets/icons/Hwave.svg'
import RwaveSVG from '../../assets/icons/Rwave.svg'
import SwaveSVG from '../../assets/icons/Swave.svg'
import GraywaveSVG from '../../assets/icons/Graywave.svg'

export default function Card(character) {
  const profilePicture = createElement('img', {
    className: 'Card__image',
    src: character.image,
    height: '200',
  })

  function houseBannerColor(text) {
    if (text === 'Gryffindor') {
      return GwaveSVG
    }
    if (text === 'Hufflepuff') {
      return HwaveSVG
    }
    if (text === 'Ravenclaw') {
      return RwaveSVG
    }
    if (text === 'Slytherin') {
      return SwaveSVG
    }
    if (text === '') {
      return GraywaveSVG
    }
  }

  const houseBanner = createElement('img', {
    className: 'wave',
    src: houseBannerColor(character.house),
    alt: character.house,
  })

  const houseBanner2 = createElement('img', {
    className: 'wave',
    src: houseBannerColor(character.house),
    alt: character.house,
  })

  const bannerBackground = createElement(
    'div',
    { className: 'ocean' },
    houseBanner,
    houseBanner2
  )

  const card = createElement(
    'section',
    {
      className: 'Card',
      innerHTML: `
      <h2>${character.name}</h2> 
      <p>${character.house.toUpperCase()}</p>
      `,
    },
    profilePicture,
    bannerBackground
  )

  return card
}
