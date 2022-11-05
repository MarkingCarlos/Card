
let isExplorer = true
function Card(event) {
  const card = event.currentTarget
  const img = card.querySelector('img')
  const h1 = card.querySelector('h1')
  const p = card.querySelector('p')
  const body = document.querySelector('body')
  const backgroundImage = isExplorer ? 'url(./assets/bg-ignite.svg)' : 'url(./assets/bg-explorer.svg)'
  const border = isExplorer ? '4px solid #CDEB14' : '4px solid #2BC8BE'
  //const color = isExplorer ? '#CDEB14' : '#2BC8BE'
  isExplorer = !isExplorer
  
 // body.style.background = color
  card.style.backgroundImage = backgroundImage
  img.style.border = border
  typeWritter(h1)
  typeWritter(p)
 
}

function typeWritter(element) {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(() => element.innerHTML += letra, 20 * i)
  })
}