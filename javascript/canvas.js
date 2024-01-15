const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

context.fillStyle = 'pink'
context.lineWidth = 5
context.strokeStyle = 'lightgreen'
context.beginPath()
context.moveTo(0,0)
context.lineTo(250, 250)
context.lineTo(0, 500)
context.moveTo(500, 0)
context.lineTo(250, 250)
context.lineTo(500, 500)
context.fill()
context.stroke()
context.fillStyle = 'black'
context.font = "50px MV Boli"
context.fillText('Letter', 200, 100)

