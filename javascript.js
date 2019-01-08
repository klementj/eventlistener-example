// console.log(event.target)

const buttonOne = document.getElementById('btn-one')
buttonOne.addEventListener('click', () => {
  alert('trykket på knap 1')
})

const buttonTwo = document.getElementById('btn-two')
buttonTwo.addEventListener('click', (event) => {
  const clickedElement = event.target
  console.log('Data med getAttribute():', clickedElement.getAttribute('data-whatever'))
  console.log('Data-* med dataset:', clickedElement.dataset.whatever)
})

const buttonThree = document.getElementById('btn-three')
buttonThree.addEventListener('click', (event) => {
  // find nærmeste .container ud fra det element der klikkes på
  event.target.closest('.container').remove()
})