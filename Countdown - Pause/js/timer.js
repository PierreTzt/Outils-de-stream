// Pour changer la durée du countdown, il suffit de changer la valeur (en minutes) de "departMinutes"

const departMinutes = 5

let temps = departMinutes * 60

const timerElement_m = document.getElementById("timer_m")
const timerElement_s = document.getElementById("timer_s")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement_m.innerText = `${minutes}`
  timerElement_s.innerText = `${secondes} s`

  temps = temps <= 0 ? 0 : temps - 1
}, 1000)