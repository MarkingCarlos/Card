
let isExplorer = true
function Card(event) {
  const card = event.currentTarget
  const img = card.querySelector('img')
  const backgroundImage = isExplorer ? 'url(./assets/bg-ignite.svg)' : 'url(./assets/bg-explorer.svg)'
  const border = isExplorer ? '4px solid #CDEB14' : '4px solid #2BC8BE'
  isExplorer = !isExplorer
  
  card.style.backgroundImage = backgroundImage
  img.style.border = border
  
}