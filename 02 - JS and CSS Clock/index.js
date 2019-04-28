const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const mins = now.getMinutes() + (seconds / 60)
  const minsDegrees = ((mins / 60) * 360) + 90
  minHand.style.transform = `rotate(${minsDegrees}deg)`

  const hour = now.getHours() + (mins / 60)
  const hourDegrees = ((hour / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

  console.log(`Time: ${Math.floor(hour)}:${Math.floor(mins)}:${seconds}`)
}

setInterval(setDate, 1000)