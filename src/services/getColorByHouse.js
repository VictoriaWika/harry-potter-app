export default function getColorByHouse(house) {
  if (house === 'Gryffindor') return 'darkred'
  if (house === 'Slytherin') return 'darkgreen'
  if (house === 'Hufflepuff') return 'gold'
  if (house === 'Ravenclaw') return 'darkblue'
  else return 'grey'
}
