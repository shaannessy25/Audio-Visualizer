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

function render(frequencyArray, ctx, width, height) {
	// Clear the canvas
	ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
	ctx.fillRect(0, 0, 300, 300)
	ctx.fill()

	// calculate the number of lines and the step between each line
	const bars = frequencyArray.length 
	const step = width / bars
	const colorStep = 360 / bars

	ctx.lineWidth = 3
	// ctx.moveTo(100,200)
    // ctx.lineTo(0, 0)
	// Draw each bar in a color based on frequency
	// Draws bars vertically like a graph
	frequencyArray.forEach((f, i) => {
		const barLength = f / 255 * height
		const x1 = step * i // x steps across canvas
		const y1 = height // y starts at bottom of canvas
		const x2 = x1 // x2 matches x1
		const y2 = height - barLength // y2 bar length
		// begin a new path
		ctx.beginPath()
		// draw the path
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
		const x = centerX + Math.cos(0) * radius
		const y = centerY + Math.sin(0) * radius
		ctx.moveTo(x, y)
		for (let i = 0; i <= sides; i += 1){
			const x = Math.cos(i * steps) * radius + centerX
			const y = Math.sin(i * steps) * radius + centerY
			ctx.lineTo(x, y)
		}
		ctx.lineWidth = lineWidth
		ctx.strokeStyle = color
		ctx.stroke()
	}

	drawPolygon(7, 100, 3, "#000")

}

export default render






