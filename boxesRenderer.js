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
	ctx.fillRect(0, 0, width, height)
    ctx.fill()
    
	const bars = frequencyArray.length + 100
	const colorStep = 360 / bars
    ctx.lineWidth = 3
    
    const halfW = width * 0.5
    const halfH = height * 0.5
    const centerX = width * 0.25
    const centerY = height * 0.25

	frequencyArray.forEach((f, i) => {

        const widthBox = f / 255 * halfW
        const heightBox = f / 255 * halfH

        const x = centerX - widthBox * 0.5
        const y = centerY - heightBox * 0.5

        ctx.beginPath()
        ctx.rect(x, y, widthBox, heightBox)

        ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 50%, 1.0)`

        ctx.stroke()
	}) 
}

export default render