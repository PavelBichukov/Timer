const timer = document.querySelector('.timer__display')
const counter = document.querySelector('.timer__timer-count')
const startButton = document.querySelector('.timer__start-button')
const pauseButton = document.querySelector('.timer__pause-button')
const resetButton = document.querySelector('.timer__reset-button')

let setCount = 0
let count = 0

function handlerStartTimer () {
  setCount = setInterval(function () {
    count++
    if (count > 9) {
      counter.innerText = count
    } else {
      counter.innerText = `0${count}`
    }
  }, 1000)
  startButton.disabled = true
  timer.style.animationName = 'zoom'
  timer.style.animationPlayState = 'running'
}

startButton.addEventListener('click', handlerStartTimer)

function handlerPauseTimer () {
  const current = count
  count = current
  clearInterval(setCount)
  startButton.disabled = false
  timer.style.animationPlayState = 'paused'
}

pauseButton.addEventListener('click', handlerPauseTimer)

function handlerResetTimer () {
  counter.innerText = '00'
  clearInterval(setCount)
  count = 0
  startButton.disabled = false
  timer.style.animationName = 'none'
}

resetButton.addEventListener('click', handlerResetTimer)
