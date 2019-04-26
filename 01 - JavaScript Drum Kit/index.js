const playDrum = (whichDrum) => {
  const audio = document.querySelector(`audio[data-key="${whichDrum}"]`)
  const key = document.querySelector(`.key[data-key="${whichDrum}"]`)

  if (!audio) return

  key.classList.add('playing')

  audio.currentTime = 0 // reset to beginning of the sound
  audio.play()
}

function stopPlaying(event) {
  if (event.propertyName !== 'transform') return

  event.target.classList.remove('playing')
}

window.addEventListener('keydown', (event) => playDrum(event.keyCode))

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('click', (event) => {
    const clicked = event.path.filter((node) => node.className === 'key')

    if (!clicked) return

    playDrum(clicked[0].dataset.key)
  })

  key.addEventListener('transitionend', stopPlaying)
})