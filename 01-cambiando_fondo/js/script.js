const button = document.querySelector('button')
const body = document.querySelector('body')

body.style.backgroundColor = 'lightskyblue';

index = 0

TextoHover = () => {
  if (index === 0) {
    button.style.color = '#f7f7f7'

  } else if (index === 1) {
    button.style.color = '#f7f7f7'
  }
}

TextoHoverInv = () => {
  if (index === 0) {
    button.style.color = '#333333'

  } else if (index === 1) {
    button.style.color = 'lightskyblue'
  }
}

Cambiatodo = () => {

  if (index === 0) {
    body.style.backgroundColor = '#f7f7f7'
    button.style.backgroundColor = 'lightskyblue';
    // button.style.color = 'lightskyblue'

    index = 1

  } else {
    body.style.backgroundColor = 'lightskyblue';
    button.style.backgroundColor = '#333333';
    // button.style.color = '#333333'

    index = 0
  }
}
// lightskyblue
// #333333
// #f7f7f7

button.addEventListener('click', Cambiatodo)
button.addEventListener('mouseenter', TextoHover)
button.addEventListener('mouseleave', TextoHoverInv)
