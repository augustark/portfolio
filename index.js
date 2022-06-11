
const links = document.querySelector('.links')

let oldValue = 0
let newValue = 0

window.addEventListener('scroll', (e) => {
  newValue = window.pageYOffset;

  if (window.innerWidth < 700) {
    if (oldValue < newValue) {
      links.style.opacity = '0'
    } else if (oldValue > newValue) {
      links.style.opacity = '1'
    }
  }

  oldValue = newValue;
});