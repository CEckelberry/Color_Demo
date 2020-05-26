function randomRGB() {
	const r1 = Math.floor(Math.random() * 256);
	const r2 = Math.floor(Math.random() * 256);
	const r3 = Math.floor(Math.random() * 256);
	return `rgb(${r1},${r2},${r3})`;
}

// const h1 = document.querySelector('h1');

// setInterval(function() {
// 	h1.style.color = randomRGB();
// }, 500);

const letters = document.querySelectorAll('.letter');

setInterval(function() {
	for (let letter of letters) {
		letter.style.color = randomRGB();
	}
}, 1000);
