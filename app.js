document.addEventListener('DOMContentLoaded', () => {
  const dragonEle = document.querySelector('.dragon')
  const displayEle = document.querySelector('.display')
  let isUp = false
  let isGameOver = false
  document.addEventListener('keyup', (e) => {
    // If space bar is clicked
    if (e.keyCode === 32 && !isUp) {
      isUp = true
      jump()
    }
  })
  let position = 0
  function jump() {
    let upTimeId = setInterval(() => {
      if (position === 200) {
        clearInterval(upTimeId)
        let downTimeId = setInterval(() => {
          if (position === 0) {
            clearInterval(downTimeId)
            isUp = false
          }
          position -= 10
          dragonEle.style.bottom = position + 'px'
        }, 20)
      }
      position += 10
      dragonEle.style.bottom = position + 'px'
    }, 20)
  }

  function generatecactus() {
    let cactusPosition = 1000
    let randomNumber = Math.random() * 3000
    const cactus = document.createElement('div')
    cactus.classList.add('cactus')
    displayEle.appendChild(cactus)
    cactus.style.left = cactusPosition + 'px'
    let leftTimeId = setInterval(() => {
      if (cactusPosition > 30 && cactusPosition < 60 && position < 60) {
        alert('Game Over')
        clearInterval(leftTimeId)
      }
      cactusPosition -= 10
      cactus.style.left = cactusPosition + 'px'
    }, 20)

    setTimeout(generatecactus, randomNumber)
  }

  generatecactus()
})
