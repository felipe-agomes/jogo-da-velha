const arraySpan = document.querySelectorAll('span')
let player = 1
const victoryCondition = [
	/* horizontal condition*/
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	/* vertical condition*/
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

	/* diagonal condition*/
	[0, 4, 8],
	[6, 4, 2],
]

const endGame = () => {
	alert(`PLAYER ${player} GANHOU`)

	arraySpan.forEach((element) => {
		element.innerHTML = ''
	})
}

const checkVictory = (move) => {
	victoryCondition.forEach((arrayCondition) => {
		let victory = 0

		arrayCondition.forEach((element) => {
			if (arraySpan[element].innerHTML == move) {
				victory++
				if (victory == 3) {
					endGame()
				}
			}
		})
	})
}

const playerCheck = ({ target }) => {
	if (target.innerHTML != '') {
		return
	}

	if (player === 1) {
		target.innerHTML = 'X'
		checkVictory('X')
		player = 2
		return
	}

	target.innerHTML = 'O'
	checkVictory('O')
	player = 1
}

arraySpan.forEach((element) => {
	element.addEventListener('click', playerCheck)
})
