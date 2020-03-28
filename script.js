

const now = new Date()
const start = new Date('2019-05-27')
const timeInMil = now - start
const daysCoded = Math.ceil(timeInMil / (1000 * 60 * 60 * 24))

document.querySelector('h1').innerHTML = daysCoded
