// -------------------------------------------------------
// Draws bars
// Draw some bars in a rainbow



/**
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} width 
 * @param {number} height 
 */

let offSet = 0

function render(frequencyArray, ctx, width, height) {
	// Clear the canvas
	ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
	ctx.fillRect(0, 0, 300, 300)
	ctx.fill()

	// calculate the number of lines and the step between each line
	const bars = frequencyArray.length 
	// const step = width / bars
	const steps = (Math.PI  * 2) / 255
	const colorStep = 360 / bars

	ctx.lineWidth = 1

	frequencyArray.forEach((f, i) => {
		const barLength = f / 255 * 100
		const radius = 100
		const centerX = width / 2
		const centerY = height / 2
		const innerRadius = radius + barLength
		const x1 = Math.cos(steps * i) * radius + centerX
		const y1 = Math.sin(steps * i) * radius + centerY// y starts at bottom of canvas
		const x2 = Math.cos(steps * i) * innerRadius + centerX// x2 matches x1
		const y2 = Math.sin(steps * i) * innerRadius + centerY// y2 bar length
		// begin a new path
		ctx.beginPath()
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
		// set the stroke color
		ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 50%, 1.0)`
		ctx.stroke()
    })
    
    //draw hexagon
	const drawPolygon = (sides, r, lineWidth, color) => {
		ctx.beginPath()
		const steps = (Math.PI  * 2) / sides
		const centerX = width / 2
		const centerY = height / 2
		const radius = r
		offSet += 0.008
		const x = centerX + Math.cos(0 + offSet) * radius
		const y = centerY + Math.sin(0 + offSet) * radius
		ctx.moveTo(x, y)
		for (let i = 0; i <= sides; i += 1){
			const x = Math.cos(i * steps + offSet) * radius + centerX
			const y = Math.sin(i * steps + offSet) * radius + centerY
			ctx.lineTo(x, y)
		}
		ctx.lineWidth = lineWidth
		ctx.strokeStyle = color
		ctx.fillStyle = color
		ctx.fill()
		ctx.stroke()
	}

	drawPolygon(8, 100, 3, "#ff00f4")

}

export default render






